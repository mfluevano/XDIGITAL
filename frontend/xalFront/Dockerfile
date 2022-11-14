FROM node:18.8

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY ./ ./

RUN npm install

CMD ["npm","runM start:proxy"]

