
var express = require('express');
var app = express();
var filepreview = require('filepreview');
var crypto = require('crypto');
const fs = require('fs')

var options = {
  width: 256,
  height: 256,
  quality: 100
};

app.get('/', function (req, res) {
	
	var remoteFile = req.query.fileurl;
	console.log(remoteFile)
  var thumbnailFile = 'previews/'+crypto.createHash('md5').update(remoteFile).digest('hex')+ '.gif';
  console.log(thumbnailFile)
  if (remoteFile) {
		if (fs.existsSync(thumbnailFile)) {
	    console.log('File on cache'+thumbnailFile);
	    res.download(thumbnailFile);
	  } else {
	  	console.log('Generating file...')
	  	try {
				filepreview.generate(remoteFile, thumbnailFile, options, function(error) {
			    if (error) {
			      nofile(remoteFile, res, error)
			    } else {
				    console.log('Generated thumbnail: '+thumbnailFile);
  			    res.download(thumbnailFile);

			    }
			  });
	  	} catch (error) {
		    nofile(remoteFile, res, error)
	  	}
	  }
  } else {
  	nofile(remoteFile, res, "The filetype param is empty")
  }
});

function nofile(file, res, error) {
	console.log("Error generating file: "+file, error);
	thumbnailFile = 'static/no-thumbnail.png'
	if (file) {
		var ext = file.split('.')
		var iconfile = 'static/filetypes/'+ext[ext.length -1]+'-icon-128x128.gif'
		if (fs.existsSync(thumbnailFile)) {
			thumbnailFile = iconfile
		}
		
	}
  res.download(thumbnailFile);			  	
}

// app.use(express.static('previews'));
app.use('/previews', express.static('previews'));
app.use('/static', express.static('static'));

var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('File preview generator is running on port '+ port +'!');
});

