'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (add) => {
    if (add === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += add;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
