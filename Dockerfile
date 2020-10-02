# base image
FROM node

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /
RUN npm install
RUN npm install -g @angular/cli@10.0.1
RUN npm i angular-responsive-carousel

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
