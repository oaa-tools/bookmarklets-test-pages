var Handlebars = require('handlebars');

module.exports = function (partialName) {
  return Handlebars.partials[partialName]();
};
