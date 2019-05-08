// eslint-disable-next-line no-useless-escape
const COMMENT_REGEX = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
const ARGUMENT_REGEX = /([^\s,]+)/g;

/**
 * Get Argument
 * @param {function} func the function
 * @returns {array} list arguments
 */
function getArgument(func) {
  if (typeof func !== 'function') {
    throw new Error(`${func} is not function`);
  }

  const fnStr = func.toString().replace(COMMENT_REGEX, '');
  let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_REGEX);
  if (result === null) { result = []; }
  return result;
}

module.exports = getArgument;
