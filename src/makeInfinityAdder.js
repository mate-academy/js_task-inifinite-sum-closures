'use strict';

/***
 *
 * @return {function}
 */

const makeInfinityAdder = () => {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
