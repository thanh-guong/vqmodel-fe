FROM node AS compile-image

# if npm install runs in root directory /, it gives error
WORKDIR /code

# install and cache app dependencies
COPY . /code

RUN npm install

ENV PATH /code/node_modules/.bin:$PATH

RUN ng build

FROM nginx
# COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /code/dist/vqmodel /usr/share/nginx/html
