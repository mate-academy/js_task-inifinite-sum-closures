'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (element) => {
    if (element !== undefined) {
      sum += element;

      return makeAdder;
    } else {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
