'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const sumDigits = (num) => {
    const tempResult = result;

    if (num) {
      result += num;

      return sumDigits;
    }

    result = 0;

    return tempResult;
  };

  return sumDigits;
}

module.exports = makeInfinityAdder;
