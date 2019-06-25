'use strict';

/***
 * Implement `sum` function that can be used the next way:
 *
 * sum() === 0
 * sum(1)() === 1
 * sum(2)(3)() === 5
 * sum(1)(1)(1)(1)(1)(1)(1)(1)() === 8
 *
 * Every chain is finished with empty parens ()
 *
 * @param {number} a
 *
 * @return {function}
 */
function sum(a) {
  let result = 0;
  if (a === undefined) {
    return result;
  } else {
    result = a;
  }
  const func = (b) => {
    if (b !== undefined) {
      result += b;
      return func;
    }
    return result;
  };
  return func;
}

module.exports = sum;
