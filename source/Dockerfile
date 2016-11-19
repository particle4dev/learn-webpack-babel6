FROM node:6.7.0
MAINTAINER Hoang Nam "particle4dev@gmail.com"

# Create a Non-root User
RUN groupadd -r nodejs \
   && useradd -m -r -g nodejs nodejs
# USER nodejs

# Create app directory
RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

# Install app dependencies
# RUN npm install -g yarn

COPY package.json npm-shrinkwrap.json /home/nodejs/app/
# Fix bug https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "test" ]
