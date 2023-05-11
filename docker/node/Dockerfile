FROM node:18

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
	&& echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install -y vim nodejs yarn \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
