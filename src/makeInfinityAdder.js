'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const add = (num) => {
    if (num === undefined) {
      const number = sum;

      sum = 0;

      return number;
    }
    sum += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
