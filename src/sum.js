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
const sum = (...base) => {
  const result = base.length
    ? base.reduce((acc, cur) => acc + cur)
    : 0;

  return !base.length ? result : (...extra) => {
    return extra.length
      ? sum(result, ...extra)
      : result;
  };
};

module.exports = sum;
