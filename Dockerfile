FROM bretfisher/jekyll-serve
WORKDIR /site

COPY . /site

RUN bundle install

EXPOSE 8080

ENTRYPOINT []

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "8080" ]
