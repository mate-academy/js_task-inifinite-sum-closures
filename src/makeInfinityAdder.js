'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += a;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
