const Issue = require("../../issue");
const proc = require("../../process_option");
const { isRegExp } = require("util");

module.exports = {
  name: "class-style",
  on: ["tag"],
  need: "tag",
  validateConfig(option) {
    if (typeof option !== "string" && isRegExp(option) === false) {
      throw new Error(`Configuration for rule "${this.name}" is invalid: Expected string|regexp got ${typeof option}`);
    }
    
    if (["none", "lowercase", "underscore", "dash", "camel", "bem"].indexOf(option) === -1 && isRegExp(option) === false) {
      throw new Error(`Configuration for rule "${this.name}" is invalid: "${option}" is not accepted. Accepted values are "none", "lowercase", "underscore", "dash", "camel" and "bem".`);
    }
    return option;
  }
  // 'id-class-style'
};


function getClasses(node) {
  return node.attribs.class.value.trim().split(" ");
}

function filterClasses(classes, options) {
  const ignore = options["id-class-ignore-regex"];
  
  // TODO: Remove after `raw-ignore-text` refacto
  classes = classes.filter(_ => /^¤+$/.test(_) === false);
  if (ignore) {
    classes = classes.filter(_class => !ignore.test(_class));
  }
  return classes;
}

module.exports.lint = function(node, options) {
  
  if (node.type !== "tag" || node.attribs.class === undefined) {
    return [];
  }
  const format = options[this.name] || options["id-class-style"];
  if (format === "none") {
    return [];
  }
  const classes = filterClasses(getClasses(node), options);

  let regex = proc.regex(format);

  return classes.filter(_class => !regex.test(_class))
    .map(_class => new Issue(
        "E011",
        node.attribs.class.valueLineCol, {
          attribute: "class",
          format: format,
          value: _class
        })
    );
};
