'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const sum = (num) => {
    if (num !== undefined) {
      result += num;

      return sum;
    } else {
      const current = result;

      result = 0;

      return current;
    }
  };

  return sum;
}

module.exports = makeInfinityAdder;
