# About

File Preview Generator: A file preview generator

This api endpoint will generate a file preview (thumbnails) from a given url by the fileurl request parameter

## Enviroment

You can run/work with this project by using docker or out of container using npm

## Install without docker

Install the dependencies first:

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

## Using docker

Go inside the project root folder and create the docker image:

```
  $ docker build -t filepreviewgenerator
```

Now just run the project with docker compose


```
  $ docker-compose up
```

Now the app will under the port 3000.

## Use

To see this in use you can access the app sending a encoded url in fileurl as parameter like this:

http://localhost:3000/?fileurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg
