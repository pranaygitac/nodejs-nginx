# nodejs-nginx
run sample node js app with nginx as reverse proxy

docker-compose up -d

#make entry in /etc/hosts file in your machine for mynodenginx.com

![image](https://user-images.githubusercontent.com/95764498/214264062-74effac8-64d5-4cd9-9bd5-4a90d839e623.png)


#to create packet.json initially

apt update && apt install nodejs

apt install npm

cd node_app

npm init -y

npm install http

vi index.js

node index.js




reflink:https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
