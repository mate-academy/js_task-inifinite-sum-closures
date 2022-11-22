'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accum = 0;

  return function innerSum(innerValue) {
    if (innerValue || innerValue === 0) {
      accum += innerValue;

      return innerSum;
    }

    const result = accum;

    accum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
