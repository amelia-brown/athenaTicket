FROM node:argon
RUN mkdir -p /usr/src/athenaTicket
WORKDIR /usr/src/athenaTicket
COPY package.json /usr/src/athenaTicket/
RUN npm install
COPY . /usr/src/athenaTicket
EXPOSE 3002
RUN npm start
