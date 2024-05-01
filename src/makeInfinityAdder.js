'use strict';

/***
 * @return {function}
 */
const makeInfinityAdder = () => {
  let sum = 0;
  const recursiveFunc = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return recursiveFunc;
  };

  return recursiveFunc;
};

module.exports = makeInfinityAdder;
