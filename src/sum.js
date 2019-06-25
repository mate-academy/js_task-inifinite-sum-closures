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
  let addSum = 0;

  if (a === undefined) {
    return 0;
  } else {
    addSum += a;

    return f1;
  }

  function f1(b) {
    if (b === undefined) {
      return addSum;
    } else {
      addSum += b;

      return f1;
    }
  }
}

module.exports = sum;
