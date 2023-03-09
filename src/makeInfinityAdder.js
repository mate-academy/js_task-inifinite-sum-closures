'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let emptyAgain = 0;
  let sum = 0;
  const addAllCurry = (a) => {
    if (a !== undefined) {
      sum += a;

      return addAllCurry;
    } else if (emptyAgain > 0) {
      sum = 0;

      return sum;
    } else {
      emptyAgain++;

      return sum;
    }
  };

  return addAllCurry;
}

module.exports = makeInfinityAdder;
