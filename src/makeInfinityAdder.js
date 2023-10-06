'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (typeof a !== 'number') {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    } else {
      sum += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
