'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function (num) {
    if (typeof num === 'number') {
      sum += num;

      return adder;
    } else if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
