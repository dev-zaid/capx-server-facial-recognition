FROM node:alpine as base

COPY package.json ./
COPY yarn.lock ./

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 5050

RUN yarn build