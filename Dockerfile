FROM nginx

RUN apt-get update -y && apt-get install -y build-essential curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs npm

COPY . /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

RUN npm install
RUN npm rebuild node-sass
RUN npm run build

# WORKDIR /app
