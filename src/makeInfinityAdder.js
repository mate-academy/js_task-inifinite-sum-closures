'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let currentAmount = 0;

  const adder = (number) => {
    const result = currentAmount;

    if (number === undefined) {
      currentAmount = 0;

      return result;
    }
    currentAmount += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
