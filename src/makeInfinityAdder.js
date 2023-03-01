'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (numbers) => {
    if (numbers === undefined) {
      const add = sum;

      sum = 0;

      return add;
    }

    sum += numbers;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
