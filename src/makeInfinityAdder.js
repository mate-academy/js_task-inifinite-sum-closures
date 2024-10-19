'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeSum = (a) => {
    if (typeof a === 'number') {
      sum += a;

      return makeSum;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return makeSum;
}

module.exports = makeInfinityAdder;
