FROM oven/bun:1

WORKDIR /usr/src/app


COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./packages.json ./packages.json
COPY ./turbo.json ./turbo.json

COPY ./apps/websockets ./apps/websockets


RUN bun install
RUN bun run db:generate

EXPOSE 8081

CMD ["bun", "run", "start:websockets"]