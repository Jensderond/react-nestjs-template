FROM node:12.14.0@sha256:cd2da90c3324458e1f022f2b7dcf5aa1bbe359421b97d6d3a630d4713503c889 AS builder

# set working directory
WORKDIR /home/app
ENV NODE_ENV=production

# Dependencies

COPY package.json /home/app/
COPY yarn.lock /home/app/
COPY lerna.json /home/app/

COPY packages/frontend/package.json /home/app/packages/frontend/

# Build
COPY . /home/app/

RUN yarn install --silent

RUN cd packages/frontend && yarn build

FROM nginx:1.17.6-alpine@sha256:2993f9c9a619cde706ae0e34a1a91eb9cf5225182b6b76eb637392d2ce816538

COPY --from=builder /home/app/packages/frontend/build /var/www/frontend
COPY --from=builder /home/app/packages/frontend/.docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
