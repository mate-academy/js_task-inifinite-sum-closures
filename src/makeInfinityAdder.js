'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const func = b => {
    const forFinalReturn = sum;

    if (!b) {
      sum = 0;

      return forFinalReturn;
    } else {
      sum += b;

      // rec
      return func;
    }
  };

  return func;
}

module.exports = makeInfinityAdder;
