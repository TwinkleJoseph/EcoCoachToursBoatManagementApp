FROM node:14.17.0-alpine

WORKDIR /react-web

COPY /web/package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm","start"]