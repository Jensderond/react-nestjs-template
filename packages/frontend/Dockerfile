FROM node:12.14.0@sha256:cd2da90c3324458e1f022f2b7dcf5aa1bbe359421b97d6d3a630d4713503c889 AS builder

# set working directory
WORKDIR /home/app
ENV NODE_ENV=production

# Dependencies

COPY package.json /home/app/
COPY yarn.lock /home/app/
COPY lerna.json /home/app/

COPY packages/frontend/package.json /home/app/packages/frontend/
COPY packages/frontend/yarn.lock /home/app/packages/frontend/


# Build
COPY . /home/app/

RUN yarn install --silent

RUN cd packages/frontend && yarn build

FROM nginx:1.17.6-alpine@sha256:cdf5e75dc8f0afda8614680d6a3aaf77807943e961ea9c0d5a09c5b6f69ff702

COPY --from=builder /home/app/packages/frontend/build /var/www/frontend
COPY ./packages/frontend/.docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
