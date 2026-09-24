'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (number) => {
    if (typeof number !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += number;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
