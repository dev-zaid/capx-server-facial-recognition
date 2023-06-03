FROM node:alpine as base

COPY package.json ./
COPY yarn.lock ./

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 5050

CMD ["yarn", "build"]