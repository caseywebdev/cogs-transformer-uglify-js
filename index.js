const {minify} = require('uglify-js');

module.exports = ({file: {buffer}, options}) => {
  const {code, error} = minify(buffer.toString(), options);
  if (error) throw error;

  return {buffer: Buffer.from(`${code}\n`)};
};
