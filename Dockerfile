FROM node:24-alpine

WORKDIR /app

ARG NPM_TOKEN

COPY package*.json ./

RUN echo "@ozanalpkaya:registry=https://npm.pkg.github.com" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc

RUN npm ci

RUN rm .npmrc

COPY . .

RUN npm run build

RUN npm prune --omit=dev

EXPOSE 3000

CMD ["node", "dist/main"]