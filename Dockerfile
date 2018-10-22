FROM node:8
WORKDIR /usr/src/app
MAINTAINER "Aldo Gatica"
COPY package*.json ./
RUN npm install
COPY . .
ADD VERSION .
EXPOSE 3000
CMD ["npm", "start"]