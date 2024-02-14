'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = [];

  const getSum = (num) => {
    if (typeof num === 'number') {
      count.push(num);
    }

    if (num === undefined) {
      const result = count.reduce((acc, item) => acc + item, 0);

      count = [];

      return result;
    }

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
