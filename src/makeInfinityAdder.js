'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = function(num) {
    if (num === undefined) {
      const amount = sum;

      sum = 0;

      return amount;
    };
    sum += num;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
