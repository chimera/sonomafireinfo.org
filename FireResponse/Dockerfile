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

ARG AIRTABLE_BASE
ENV AIRTABLE_BASE $AIRTABLE_BASE

ENV RAILS_LOG_TO_STDOUT 1
ENV RAILS_SERVE_STATIC_FILES 1

ENV SECRET_KEY_BASE e34e8e66d0ac1159b827009fddfee01522145b6ee6abc5ef93187146be912b3134aa7b05d033efffe0d830fc015599b3f6d091b1906e9290650d5f56a292cddf

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
