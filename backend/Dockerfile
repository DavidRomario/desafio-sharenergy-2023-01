FROM node:12-alpine

RUN mkdir /app/

WORKDIR /app/

COPY / /app/
RUN rm -rf /app/node_modules
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "start"]