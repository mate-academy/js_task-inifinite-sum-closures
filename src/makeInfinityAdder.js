'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = function(number) {
    if (arguments.length > 0) {
      sum += number;

      return add;
    }

    const storedSum = sum;

    sum = 0;

    return storedSum;
  };

  return add;
}

module.exports = makeInfinityAdder;
