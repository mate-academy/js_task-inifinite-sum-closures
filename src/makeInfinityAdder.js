'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const secondAdder = (num) => {
    if (typeof num !== 'number') {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum = sum + num;

      return secondAdder;
    }
  };

  return secondAdder;
}

module.exports = makeInfinityAdder;
