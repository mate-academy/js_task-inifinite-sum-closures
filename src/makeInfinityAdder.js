'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = function(number) {
    if (arguments.length === 0) {
      const sum2 = sum;

      sum = 0;

      return sum2;
    }

    sum += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
