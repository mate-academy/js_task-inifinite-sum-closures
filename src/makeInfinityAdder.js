'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const theAdd = (value) => {
    if (value) {
      sum += value;

      return theAdd;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return theAdd;
}

module.exports = makeInfinityAdder;
