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
  let summary = a;
  if (summary === undefined) {
    return 0;
  }
  const summaryFunction = function(b) {
    if (b) {
      summary += b;
      return summaryFunction;
    }
    return summary;
  };
  return summaryFunction;
}

module.exports = sum;
