'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value || value === 0) {
      sum += value;

      return adder;
    }

    const temp = sum;

    sum = 0;

    return temp;
  };

  return adder;
}

module.exports = makeInfinityAdder;
