'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (x) => {
    if (x === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }
    sum += x;

    return add;
  };

  return add;
}
module.exports = makeInfinityAdder;
