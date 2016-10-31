FROM node:4
RUN mkdir -p /usr/src/athenaTicket
WORKDIR /usr/src/athenaTicket
COPY package.json /usr/src/athenaTicket/
RUN npm install
COPY . /urs/src/athenaTicket
EXPOSE 3002
CMD ['npm', 'start']
