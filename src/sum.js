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
  let result = a;
  if (a === undefined) {
    return 0;
  }
  function sum2(b) {
    if (b === undefined) {
      return result;
    }
    result += b;
    return sum2;
  }
  return sum2;
}

module.exports = sum;
