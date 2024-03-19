'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function addNumer(num) {
    const temp = sum;

    if (num === undefined) {
      sum = 0;

      return temp;
    }

    sum += +num;

    return addNumer;
  }

  return addNumer;
}

module.exports = makeInfinityAdder;
