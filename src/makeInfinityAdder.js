'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const accum = (initialNum) => {
    if (initialNum === undefined) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    sum += initialNum;

    return accum;
  };

  return accum;
}

module.exports = makeInfinityAdder;
