FROM node:latest

WORKDIR /app

COPY . /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN yarn set version 3.1.1

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]