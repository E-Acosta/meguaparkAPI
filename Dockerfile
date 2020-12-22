from node:12-alpine

WORKDIR /api

COPY package.json .

COPY tsconfig.json .

COPY nodemon.json .

RUN ["npm","i"]

COPY src src

CMD [ "npm","run","start:dev"]
