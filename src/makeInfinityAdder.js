'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    const setValue = sum;

    if (!value && value !== 0) {
      sum = 0;

      return setValue;
    }
    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
