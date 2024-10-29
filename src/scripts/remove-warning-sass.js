//Only for development

const sass = require('sass');

const result = sass.renderSync({
  silenceDeprecations: ['legacy-js-api'],
  ...
});