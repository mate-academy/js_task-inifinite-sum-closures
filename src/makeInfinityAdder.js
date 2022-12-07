'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const add = (element) => {
    if (element === undefined) {
      const allSum = sum;

      sum = 0;

      return allSum;
    }

    sum += element;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
