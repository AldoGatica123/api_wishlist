FROM node:8
WORKDIR /usr/src/app
MAINTAINER "Aldo Gatica"
ENV PORT=3000
ENV REDIS_URL = redis://redis
ENV MONGODB_URL = mongodb://localhost/wishlist
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
