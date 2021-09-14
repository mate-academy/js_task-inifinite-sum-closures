'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let suma;

  const adder = (x) => {
    if (x === undefined) {
      suma = sum;

      sum = 0;

      return suma;
    };

    if (suma !== undefined) {
      return suma;
    };

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
