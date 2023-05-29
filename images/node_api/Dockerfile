FROM node:14.21.3-alpine3.17

WORKDIR /root/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 5800

CMD echo $NODE_ENV && \
    npm run migrate:up && \
    npm start