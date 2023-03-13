FROM node:14.17.0-alpine

WORKDIR /react-web/app

COPY package-lock.json /react-web/app/package-lock.json
COPY package.json /react-web/app/package.json

RUN npm install

COPY . /react-web/app/

EXPOSE 3000

CMD ["npm","start"]