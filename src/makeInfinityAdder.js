'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let toClear = false;
  let result = 0;

  const sum = (add) => {
    if (toClear) {
      result = 0;
      toClear = false;
    }

    if (add !== undefined) {
      result += add;

      return sum;
    }

    toClear = true;

    return result;
  };

  return sum;
}

module.exports = makeInfinityAdder;
