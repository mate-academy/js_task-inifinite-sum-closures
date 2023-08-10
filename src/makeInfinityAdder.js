'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const sum = (num) => {
    const countCopy = count;

    if (typeof num === 'number') {
      count += num;

      return sum;
    }

    count = 0;

    return countCopy;
  };

  return sum;
}

module.exports = makeInfinityAdder;
