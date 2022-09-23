'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let noParam = 0;

  const adder = (num) => {
    if (num !== undefined) {
      sum += num;
      noParam = 0;

      return adder;
    }
    noParam++;

    if (noParam === 1) {
      return sum;
    }

    if (noParam > 1) {
      sum = 0;

      return sum;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
