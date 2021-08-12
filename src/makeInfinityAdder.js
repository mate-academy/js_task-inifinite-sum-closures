'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const sumDigits = (x) => {
    const tempResult = result;

    if (x) {
      result += x;

      return sumDigits;
    }

    result = 0;

    return tempResult;
  };

  return sumDigits;
}

module.exports = makeInfinityAdder;
