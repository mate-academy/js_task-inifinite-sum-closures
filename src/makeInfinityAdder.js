'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    const rs = sum;

    if (value === undefined) {
      sum = 0;

      return rs;
    }

    sum += value;

    return adder;
  };

  adder.toString = () => {
    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
