'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function(x = null) {
    if (x == null) {
      const curent = sum;

      sum = 0;

      return curent;
    }
    sum += x;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
