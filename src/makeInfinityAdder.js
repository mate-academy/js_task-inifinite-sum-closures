'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumAllNumers = 0;

  const adder = (numbers) => {
    if (numbers === undefined) {
      const result = sumAllNumers;

      sumAllNumers = 0;

      return result;
    }

    sumAllNumers += numbers;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
