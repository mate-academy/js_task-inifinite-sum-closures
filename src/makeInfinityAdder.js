'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (int) => {
    if (int === undefined) {
      const copy = sum;

      sum = 0;

      return copy;
    };

    sum += int;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
