'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (!number && number !== 0) {
      const sumBeforeReset = sum;

      sum = 0;

      return sumBeforeReset;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
