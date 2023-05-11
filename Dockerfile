FROM public.ecr.aws/docker/library/node:18-bullseye-slim

ARG TARGETARCH

ENV \
  DOCKER=true \
  NODE_OPTIONS=--use-openssl-ca \
  NODE_MODULES_DIR=/usr/local/node_modules

RUN apt-get update && \
  apt-get -y --no-install-recommends install curl ca-certificates && \
  rm -rf /var/lib/apt/lists/* /var/lib/dpkg/*-old /var/cache/* /var/log/*

RUN set -x && \
  curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v0.111.3/hugo_extended_0.111.3_linux-${TARGETARCH}.tar.gz" | tar -xvz -C /usr/local/bin/ --wildcards "hugo"

RUN set -x && \
  arch="$TARGETARCH" && \
  if [ "$TARGETARCH" = "amd64" ]; then \
    arch="x64"; \
  fi && \
  curl -fsSL "https://github.com/sass/dart-sass-embedded/releases/download/1.62.1/sass_embedded-1.62.1-linux-${arch}.tar.gz" | tar -xvz --strip-components 1 -C /usr/local/bin/ --wildcards "*/dart-sass-embedded" --wildcards "*/src/*"

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN mkdir -p "$NODE_MODULES_DIR" && \
  ln -s "$NODE_MODULES_DIR" /app/node_modules && \
  yarn

COPY .eslintrc.js .prettierignore .prettierrc.yml config.yaml postcss.config.js /app/
COPY assets /app/assets
COPY config /app/config
COPY content /app/content
COPY layouts /app/layouts
COPY vendor/datagov-11ty/styles /app/vendor/datagov-11ty/styles

ENTRYPOINT ["/app/bin/docker-entrypoint", "--"]
CMD ["/app/bin/docker-start"]
