'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  function sum(value) {
    if (value === undefined) {
      const currentRes = result;

      result = 0;

      return currentRes;
    }

    result += value;

    return sum;
  }

  return sum;
}

module.exports = makeInfinityAdder;
