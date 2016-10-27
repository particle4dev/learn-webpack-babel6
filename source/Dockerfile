FROM node:6.7.0
MAINTAINER Hoang Nam "particle4dev@gmail.com"

# Create a Non-root User
RUN groupadd -r nodejs \
   && useradd -m -r -g nodejs nodejs
USER nodejs

# Create app directory
RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

# Install app dependencies
COPY package.json npm-shrinkwrap.json /home/nodejs/app/
RUN npm install

CMD [ "npm", "run", "test" ]
