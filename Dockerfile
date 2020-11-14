FROM node:14.15-slim

WORKDIR /usr/src/app/kocerc/client

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

# CMD [ "npm", "run", "start" ]
