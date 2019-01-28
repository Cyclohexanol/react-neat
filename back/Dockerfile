FROM node:8.11.3-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY .graphqlconfig.yml ./
ENV PRISMA_ENDPOINT "http://prisma:4466"
ENV APP_SECRET "jwtsecret123"
ENV PRISMA_SECRET summus
RUN yarn
CMD ["yarn", "start"]
