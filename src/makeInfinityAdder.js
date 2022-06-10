'use strict';

/***
 *
 * @return {function}
 */

 function makeInfinityAdder() {
  let sum = 0;

  function getSum(val) {
    if (typeof val !== 'number') {
      const sumCopy = sum;
      sum = 0;
      return sumCopy;
    }
    sum += val;
    return getSum;
  };
  return getSum;
}

module.exports = makeInfinityAdder;
