FROM node:8-slim

RUN apt-get update -y
RUN apt-get install -y python2.7 g++ build-essential unoconv ffmpeg imagemagick curl
RUN whereis python 
RUN mkdir /app
ENV PYTHON=/usr/bin/python2.7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]