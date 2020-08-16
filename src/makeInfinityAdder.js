'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const sumFunction = a => {
    if (a === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += a;

    return sumFunction;
  };

  return sumFunction;
}

module.exports = makeInfinityAdder;
