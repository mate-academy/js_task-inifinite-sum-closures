'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(initialValue = 0) {
  let sum = initialValue;

  const makeAdder = (value) => {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += value;

      return makeAdder;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
