# syntax=docker/dockerfile:1

FROM node
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
