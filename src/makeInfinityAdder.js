'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let resultSum = 0;

  const funAdder = (a) => {
    if (a === undefined) {
      const returnValue = resultSum;

      resultSum = 0;

      return returnValue;
    } else {
      resultSum += a;

      return funAdder;
    }
  };

  return funAdder;
}

module.exports = makeInfinityAdder;
