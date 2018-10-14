FROM bretfisher/jekyll-serve
WORKDIR /site

COPY . /site

EXPOSE 8080

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "8080" ]
