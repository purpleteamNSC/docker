# Docker
![Alt text](image.png)

# Comandos Docker
![Alt text](image-1.png)
![Alt text](image-2.png)

# Comandos para criar bind mount, pesrsintindo pasta local no container
EX comando antigo:
docker run -d --name nginx -p (porta host):(porta container) -v (pasta host local):(local no container) nginx
docker run -d --name nginx -p 8080:80 -v $(pwd)/template:/usr/share/nginx/html nginx

EX comando mas recente:
docker run -d --name web -p 8080:80 --mount type=bind,source="$(pwd)"/template,target=/usr/share/nginx/html nginx