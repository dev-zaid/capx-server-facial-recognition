FROM node:alpine as base

COPY package.json ./
COPY yarn.lock ./

WORKDIR /app

COPY . .
