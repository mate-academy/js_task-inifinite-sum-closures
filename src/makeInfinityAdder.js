'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (a) => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
