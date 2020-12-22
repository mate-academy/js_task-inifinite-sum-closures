'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNum = 0;
  const add = (num) => {
    if (num === undefined) {
      const result = sumOfNum;

      sumOfNum = 0;

      return result;
    }

    sumOfNum += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
