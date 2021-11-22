'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let copyCurrentSum;

  function foo(value) {
    if (value !== undefined) {
      currentSum += value;

      return foo;
    } else {
      copyCurrentSum = currentSum;
      currentSum = 0;

      return copyCurrentSum;
    }
  }

  return foo;
}

module.exports = makeInfinityAdder;
