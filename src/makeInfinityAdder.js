'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const addNumbers = function adder(number) {
    if (number !== undefined) {
      sum += number;

      return addNumbers;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return addNumbers;
}

module.exports = makeInfinityAdder;
