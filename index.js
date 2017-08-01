const {minify} = require('uglify-js');

module.exports = ({file: {buffer}, options}) => ({
  buffer: Buffer.from(`${minify(buffer.toString(), options).code}\n`)
});
