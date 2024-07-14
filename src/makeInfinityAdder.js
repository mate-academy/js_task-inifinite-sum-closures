'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (val) => {
    if (val !== undefined) {
      sum += val;

      return adder;
    }

    const res = sum;

    sum = 0;

    return res;
  };

  return adder;
}

module.exports = makeInfinityAdder;
