FROM node:8.11.3-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
CMD ["yarn", "start"]
