FROM node:11-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn 

EXPOSE 3001

CMD ["npm", "run", "${NODE_ENV}"]