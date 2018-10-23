# otter.ly

## Content creation

### Posts

Post files (ex. 2018-10-15-post-file-name.md) should be placed in the `_posts` directory.
Please use following Frontmatter structure in each post document:

```
---
layout: post
permalink: /custom-post-link/
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
