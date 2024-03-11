FROM nginx:latest

WORKDIR /app

COPY template /usr/share/nginx/html

RUN apt-get update
RUN apt-get install nano -y

