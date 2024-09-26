'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (numToAdd) => {
    if (!numToAdd && numToAdd !== 0) {
      const copyOfSum = sum;

      sum = 0;

      return copyOfSum;
    }

    sum += numToAdd;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
