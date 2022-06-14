'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let count = 0;

  const add = (...args) => {
    for (const x of args) {
      sum = sum + x;
      count++;

      return add;
    }

    if (count === 0) {
      sum = 0;
    }

    count = 0;

    return sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
