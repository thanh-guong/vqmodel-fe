# base image
FROM node:12.18.2

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@10.0.1

# add app
COPY . /app

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0
