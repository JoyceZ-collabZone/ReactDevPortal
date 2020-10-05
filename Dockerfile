
# step 1: use official image as a parent image, the node version as per my local node version, start from pre-existing node.js image by Node
FROM node:12.18.4-stretch 
# step 2: set up a work directory, all subsequent actions take from image filesystem, not host filesystem
WORKDIR /projects
# step 3: copy the server source file from local to docker image lcoation "workdir/projects/server"
COPY ./server ./server 
# step 4: show all the hidden files in the directory
RUN ls -all
# step 5: show current directory
RUN pwd
# step 6: navigate into work directory where docker image is
WORKDIR ./server
# step 7: install npm dependencies in docker image filesystem
RUN npm install
WORKDIR /projects
# step 8: copy package json to docker image, it has " "start": "cd server && node ./src/index.js" "
COPY ./package.json ./package.json
# step 9: last command in dockfile CMD, only required if not included in docker.compose
CMD npm run start

