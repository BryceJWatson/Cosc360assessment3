FROM node:16-alpine

WORKDIR /gomoku-service

ADD ./package.json ./
ADD ./package-lock.json ./
ADD ./tsconfig.json ./
ADD ./.env ./

RUN npm install

CMD ["npm", "run", "dev"]
