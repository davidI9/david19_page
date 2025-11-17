#------1º A node image is pulled, then setup the web files and build the dist------#

FROM node:latest AS build

WORKDIR /david_web

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#------2º A nginx image is pulled and it serves the web------#

FROM nginx:1.29.3

COPY --from=build /david_web/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]