const _ = require('underscore');
const uglifyJs = require('uglify-js');

const DEFAULTS = {
  fromString: true
};

module.exports = ({file: {buffer}, options}) => {
  try {
    options = _.extend({}, DEFAULTS, options);
    return {
      buffer: Buffer.from(
        `${uglifyJs.minify(buffer.toString(), options).code}\n`
      )
    };
  } catch (er) {
    throw er instanceof Error ? er : _.extend(new Error(), er);
  }
};
