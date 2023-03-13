FROM node:14.17.0-alpine

# install dependencies
WORKDIR /app


RUN set -x \
	&& chmod -R 777 /app/

## Include details of the required dependencies
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

RUN npm cache clean --force && \
 	npm install && \
	npm install -g npm-check-updates

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /app


# set application PORT and expose docker PORT
ENV PORT 5000
EXPOSE 5000

CMD ["sh","-c","npm start"]