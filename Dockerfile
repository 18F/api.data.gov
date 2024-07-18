FROM public.ecr.aws/docker/library/node:20-bookworm-slim

ARG TARGETARCH

ENV \
  DOCKER=true \
  NODE_OPTIONS=--use-openssl-ca \
  NODE_MODULES_DIR=/usr/local/node_modules \
  PNPM_HOME=/usr/local/pnpm

RUN apt-get update && \
  apt-get -y --no-install-recommends install curl ca-certificates && \
  rm -rf /var/lib/apt/lists/* /var/lib/dpkg/*-old /var/cache/* /var/log/*

ARG HUGO_VERSION=0.129.0
RUN set -x && \
  curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" | tar -xvz -C /usr/local/bin/ --wildcards "hugo"

ARG DART_SASS_VERSION=1.77.8
RUN set -x && \
  arch="$TARGETARCH" && \
  if [ "$TARGETARCH" = "amd64" ]; then \
    arch="x64"; \
  fi && \
  curl -fsSL "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-${arch}.tar.gz" | tar -xvz --strip-components 1 -C /usr/local/bin/ --wildcards "*/sass" --wildcards "*/src/*"

# Install pnpm
#
# Set store-dir for pnpm config due to PNPM_HOME not affecting things with some
# of our development volume mounts: https://github.com/pnpm/pnpm/issues/7050
ARG PNPM_VERSION=9.5.0
RUN set -x && \
  npm install -g "@pnpm/exe@${PNPM_VERSION}" && \
  mkdir -p ~/.config/pnpm && \
  printf "update-notifier=false\nstore-dir=${PNPM_HOME}/store\n" > ~/.config/pnpm/rc

RUN mkdir -p /app
WORKDIR /app

# Symlink the local node_modules to the system-wide node directory.
#
# Note, we create a `.pnpm` directory inside, since it seems to sidestep this issue of
# install failing if node_modules is a symlink:
# https://github.com/pnpm/pnpm/issues/7690
COPY package.json pnpm-lock.yaml /app/
RUN mkdir -p "${NODE_MODULES_DIR}/.pnpm" && \
  ln -s "$NODE_MODULES_DIR" /app/node_modules && \
  pnpm install

COPY .eslintrc.js .prettierignore .prettierrc.yml config.yaml postcss.config.js /app/
COPY assets /app/assets
COPY config /app/config
COPY content /app/content
COPY layouts /app/layouts
COPY vendor/datagov-11ty/styles /app/vendor/datagov-11ty/styles

ENTRYPOINT ["/app/bin/docker-entrypoint", "--"]
CMD ["/app/bin/docker-start"]
