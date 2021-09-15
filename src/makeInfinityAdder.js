'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const suma = sum;

      sum = 0;

      return suma;
    };

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
