'use strict';

/***
 *
 * @return {function}
 */

const makeInfinityAdder = () => {
  let sum = 0;

  return function add(num) {
    if (!num && num !== 0) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }
    sum += num;

    return add;
  };
};

module.exports = makeInfinityAdder;
