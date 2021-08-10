'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (digit) => {
    if (digit !== undefined) {
      total += digit;

      return add;
    } else {
      const result = total;

      total = 0;

      return result;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
