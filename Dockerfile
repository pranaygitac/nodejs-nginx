FROM node:alpine

LABEL DOCKER_FILE="pranay/nodeapp:1.0"
# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY ./node_app/package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY ./node_app/ .

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
CMD ["node", "index.js"]