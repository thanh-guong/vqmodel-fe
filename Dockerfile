# base image
FROM node

# if npm install runs in root directory /, it gives error
WORKDIR /code

# install and cache app dependencies
COPY . /code

RUN npm install
RUN npm install -g @angular/cli@10.0.1
RUN npm i angular-responsive-carousel

# add `/code/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4200
