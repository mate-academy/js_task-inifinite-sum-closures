'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const result = (number) => {
    if (number || number >= 0 || number <= 0) {
      sum += number;

      return result;
    }

    if (number === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return result;
}

module.exports = makeInfinityAdder;
