'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let count = 0;

  const add = (num) => {
    if (num) {
      count += num;

      return add;
    }

    const sum = count;

    count = 0;

    return sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
