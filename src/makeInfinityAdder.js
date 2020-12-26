'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const func = function add(number) {
    if (number) {
      sum += number;

      return add;
    }

    const clearSum = sum;

    sum = 0;

    return clearSum;
  };

  return func;
}

module.exports = makeInfinityAdder;
