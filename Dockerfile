FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY bower.json /usr/src/app/bower.json

RUN npm install -g bower && \
    npm install && \
    bower --allow-root install

COPY . /usr/src/app    

EXPOSE 3000

CMD ["npm", "start"]
