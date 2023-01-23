'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (args) => {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
