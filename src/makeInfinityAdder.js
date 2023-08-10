'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...value) => {
    if (value.length) {
      sum += value[0];

      return adder;
    }

    const temp = sum;

    sum = 0;

    return temp;
  };

  return adder;
}

module.exports = makeInfinityAdder;
