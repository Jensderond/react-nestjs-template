FROM node:12.14.0@sha256:cd2da90c3324458e1f022f2b7dcf5aa1bbe359421b97d6d3a630d4713503c889 AS builder

ENV NODE_ENV build

WORKDIR /home/node
COPY . /home/node

RUN yarn install --frozen-lockfile --silent \
    && yarn workspace backend build

# ---

FROM node:12.14.0@sha256:cd2da90c3324458e1f022f2b7dcf5aa1bbe359421b97d6d3a630d4713503c889

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --chown=node:node --from=builder /home/node/packages/backend/package.json /home/node/
COPY --chown=node:node --from=builder /home/node/yarn.lock /home/node/
COPY --chown=node:node --from=builder /home/node/packages/backend/dist/ /home/node/dist/

RUN yarn install --frozen-lockfile --silent

EXPOSE 3333

CMD ["yarn", "start:prod"]