FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./site/template /usr/share/nginx/html

RUN apt-get update
RUN apt-get install nano -y
