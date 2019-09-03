module.exports = {
  "maxerr": false,
  "raw-ignore-regex": false,
  "spec-char-escape": false,
  "text-ignore-regex": false,
  "rules": {
    "attr-bans": [
      true, {
        "attributes": [
          "align",
          "background",
          "bgcolor",
          "border",
          "frameborder",
          "longdesc",
          "marginwidth",
          "marginheight",
          "scrolling",
          "style",
          "width"
        ]
      }
    ],
    "indent-delta": false,
    "indent-style": [
      true,
      {
        "style": "nonmixed"
      }
    ],
    "indent-width": [
      true, {
        "width": 4
      }
    ],
    "indent-width-cont": false,
    "tag-bans": [
      true,
      {
        "tags": [
          "style",
          "b",
          "i"
        ]
      }
    ],
    "tag-close": true,
    "tag-name-lowercase": true,
    "tag-name-match": true,
    "tag-self-close": false,
    "doctype-first": false,
    "doctype-html5": false,
    "attr-name-style": [
      true,
      {
        "style": "dash"
      }
    ],
    "attr-name-ignore-regex": false,
    "attr-no-dup": true,
    "attr-no-unsafe-char": true,
    "attr-order": false,
    "attr-quote-style": [
      true,
      {
        "style": "double"
      }
    ],
    "attr-req-value": true,
    "attr-new-line": false,
    "attr-validate": true,
    "id-no-dup": true,
    "id-class-no-ad": true,
    "id-class-style": [
      true,
      {
        "style": "underscore"
      }
    ],
    "class-no-dup": true,
    "class-style": false,
    "id-class-ignore-regex": false,
    "img-req-alt": true,
    "img-req-src": true,
    "html-valid-content-model": true,
    "head-valid-content-model": true,
    "href-style": false,
    "link-req-noopener": true,
    "label-req-for": true,
    "line-end-style": [
      true,
      {
        "style": "lf"
      }
    ],
    "line-no-trailing-whitespace": true,
    "line-max-len": false,
    "line-max-len-ignore-regex": false,
    "head-req-title": true,
    "title-no-dup": true,
    "title-max-len": [
      true,
      {
        length: 60
      }
    ],
    "html-req-lang": false,
    "lang-style": [
      true,
      {
        "style": "case"
      }
    ],
    "fig-req-figcaption": false,
    "focusable-tabindex-style": false,
    "input-radio-req-name": true,
    "input-req-label": false,
    "table-req-caption": false,
    "table-req-header": false,
    "tag-req-attr": false
  }
};