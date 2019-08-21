const Issue = require("../../issue");
/* eslint-disable-next-line no-control-regex */
const regUnsafe = /[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;

module.exports = {
  name: "attr-no-unsafe-char",
  on: ["tag"]
};

module.exports.lint = function(node/*, opts*/) {
  let issues = [];
  let attributes = Object.values(node.attribs);
  // TODO: Remove after `raw-ignore-text` refacto
  attributes = attributes.filter(attribute => /^¤+$/.test(attribute.rawName) === false);

  attributes.forEach(attribute => {
    if (regUnsafe.test(attribute.value)) {
      issues.push(new Issue("E004", attribute.valueLineCol));
    }
  });
  return issues;
};
