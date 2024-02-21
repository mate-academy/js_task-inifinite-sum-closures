'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const result = (number) => {
    if (typeof number === 'number') {
      sum += number;

      return result;
    } else {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return result;
}

module.exports = makeInfinityAdder;
