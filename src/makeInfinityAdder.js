'use strict';

/***
 *
 * @return {function}
 */

const makeInfinityAdder = () => {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
