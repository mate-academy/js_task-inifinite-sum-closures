'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function loopAdder(value) {
    if (value !== undefined) {
      sum += value;

      return loopAdder;
    };

    const result = sum;

    sum = 0;

    return result;
  };

  return loopAdder;
}

module.exports = makeInfinityAdder;
