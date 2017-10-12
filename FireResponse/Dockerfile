FROM ruby:2.4

RUN apt-get update && \
    apt-get install -y build-essential nodejs --fix-missing --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install

COPY . .

ENV RAILS_ENV production
ENV RACK_ENV production
ENV RAILS_ROOT /usr/src/app

ENV RAILS_LOG_TO_STDOUT 1
ENV RAILS_SERVE_STATIC_FILES 1

ARG ENVKEY
ENV ENVKEY $ENVKEY

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
