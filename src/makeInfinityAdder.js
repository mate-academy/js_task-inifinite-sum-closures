'use strict';
/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(x) {
    if (x === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    } else {
      sum += x;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
