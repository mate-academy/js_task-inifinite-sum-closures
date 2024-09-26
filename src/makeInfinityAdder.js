'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  function foo(value) {
    if (value !== undefined) {
      currentSum += value;

      return foo;
    };

    const copyCurrentSum = currentSum;

    currentSum = 0;

    return copyCurrentSum;
  };

  return foo;
}

module.exports = makeInfinityAdder;
