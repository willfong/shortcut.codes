FROM node:lts-alpine
WORKDIR /app
COPY src/package.json src/yarn.lock /app/
RUN yarn install
COPY src/ /app/
CMD ["yarn", "start"]