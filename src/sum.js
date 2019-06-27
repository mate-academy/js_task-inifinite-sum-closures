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
  let summ = 0;
  let infinity;

  if (!a) { return summ; }
  summ += a;

  return infinity = (param) => {
    if (!param) { return summ; }

    summ += param;
    return infinity;
  };
}

module.exports = sum;
