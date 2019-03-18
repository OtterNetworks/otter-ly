# otter.ly

## Content creation

### Posts

Post files (ex. 2018-10-15-post-file-name.md) should be placed in the `_posts` directory.
Please use following Frontmatter structure in each post document:

```
---
layout: post
permalink: /custom-post-link/
date: 2018-12-01 00:00:00
blog_title: "Blog card title"
blog_description: >-
  Blog card description
blog_image: "/img/posts/how-i-learned.svg"
headline: "By Author - Author headline - 2nd November 2018"
title: "The page title tag and og:title content. If not set title content is taken from _config.yml."
description: >-
  The page meta description tag and og:description content. If not set
  description is taken from _config.yml.
featured: true
---
```

### Pages

Page files (ex. page-name.md, page-name.html) should be placed in the `pages` directory.
Please use following Frontmatter structure in each post document:

```
---
layout: page
permalink: /custom-page-link/
---
```

## CSS

CSS-code is located in `_assets/css` folder. To add css code for a new
property/component/section create a new file in coresponding `_assets/css/`
subdirectory and `@import` it in the directory main file `_main.scss`.

`_assets/css` subdirectory structure:
- `components/` – includes component style files, such as navigation, button, field.
- `cards/` - includes card style files, such as team card ...
- `properties/` – includes property modificator style files, such as padding, margin, width.
- `sections/` – includes section style files, such as hero, team section, how it works.
- `utils/` – includes css system styles, mixins, variables.

## JS

JS-code is located in `_assets/js` folder. The folder contains main import file
`main.js` and components subfolder with script files for each components.


# making and installing SSL certs
This bit is manual because the various toolings that exist to automate 
this are immature and annoying.

## install certbot!
`pip install certbot`

# Production

## Get new cert
`sudo certbot -d *.otter.ly,otter.ly --manual --preferred-challenges dns certonly`

## Delete the existing cert from K8s
`kubectl delete secret dovu-app -n dovu-app-production`

## Install the cert
`sudo kubectl create secret tls dovu-app --key /etc/letsencrypt/live/dovu.app/privkey.pem --cert /etc/letsencrypt/live/dovu.app/fullchain.pem -n dovu-app-production`

# Staging

## Get new cert
`sudo certbot -d *.otterly.cc,otterly.cc --manual --preferred-challenges dns certonly`

## Delete the existing cert from K8s
`kubectl delete secret dovu-app`

## Install the cert
`sudo kubectl create secret tls dovu-ninja --key /etc/letsencrypt/live/dovu.ninja/privkey.pem --cert /etc/letsencrypt/live/dovu.ninja/fullchain.pem`
