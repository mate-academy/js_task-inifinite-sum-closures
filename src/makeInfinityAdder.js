'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (number !== undefined) {
      sum += number;

      return add;
    }

    const showSum = sum;

    sum = 0;

    return showSum;
  };
}

module.exports = makeInfinityAdder;
