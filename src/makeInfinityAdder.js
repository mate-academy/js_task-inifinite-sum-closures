'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = (numbers) => {
    if (numbers === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }
    result += numbers;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
