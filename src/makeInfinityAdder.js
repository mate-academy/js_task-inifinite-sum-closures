'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

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
