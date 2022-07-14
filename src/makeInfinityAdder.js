'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (typeof value !== 'number') {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
