'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counterSum = 0;
  let result = 0;

  const adder = (a) => {
    if (a !== undefined) {
      counterSum += a;

      return adder;
    } else {
      result = counterSum;
      counterSum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
