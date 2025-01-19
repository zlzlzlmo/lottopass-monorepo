FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

WORKDIR /usr/src/app/apps/server

COPY apps/server .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start:prod"]
