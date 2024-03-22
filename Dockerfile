FROM ruby:3.3.0

ARG NODE_MAJOR_VERSION=20
RUN curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR_VERSION.x | bash -
RUN apt-get update -qq && \
    apt-get install -y build-essential libvips nodejs libpq-dev postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man && \
    npm install -g yarn

# RUN mkdir /app
WORKDIR /app
ADD . /app
RUN gem install bundler -v 2.5.6 # aqui você pode especificar com o que está no final do Gemfile.lock
RUN bundle install