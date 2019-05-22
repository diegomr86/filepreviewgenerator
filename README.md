# About

File Preview Generator: A file preview generator

This api endpoint will generate a file preview (thumbnails) from a given url by the fileurl request parameter

## Installation

depends on 'unoconv':

```
  $ apt-get install unoconv
```

depends on 'ffmpeg':


```
  $ apt-get install ffmpeg
```

depends on 'ImageMagick':

```
  $ apt-get install imagemagick
```


depends on 'curl':

```
  $ apt-get install curl
```

To install npm dependencies use:

```
  $ npm install
```

## Develoment

To run in development must install 'nodemon' in global mode:

```
  $ npm install nodemon --save
```

To run in development mode run:

```
  $ npm run dev
```

## Production

To run in production mode run:

```
  $ npm run prod
```

This application use the enviroment variable 'PORT' or the 3000 by default.