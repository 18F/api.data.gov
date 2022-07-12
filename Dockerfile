FROM node:16-bullseye

ENV \
  DOCKER=true \
  NODE_OPTIONS=--use-openssl-ca \
  NODE_MODULES_DIR=/usr/local/node_modules

RUN set -x && \
  arch="$(dpkg --print-architecture)" && \
  if [ "$arch" = "arm64" ]; then \
    arch="aarch64"; \
  fi && \
  curl -fsSL "https://github.com/hugoguru/dist-hugo/releases/download/v0.101.0/hugo-extended-0.101.0-linux-${arch}.tar.gz" | tar -xvz -C /usr/local/bin/ --wildcards "hugo"

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN mkdir -p "$NODE_MODULES_DIR" && \
  ln -s "$NODE_MODULES_DIR" /app/node_modules && \
  yarn

COPY . /app

CMD ["/app/bin/docker-start"]
