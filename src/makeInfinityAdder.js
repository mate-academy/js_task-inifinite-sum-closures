'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const infitiyAdder = (num) => {
    if (typeof num !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return infitiyAdder;
    }
  };

  return infitiyAdder;
}

module.exports = makeInfinityAdder;
