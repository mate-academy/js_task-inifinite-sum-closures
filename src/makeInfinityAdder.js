'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const oneMoreNumber = (number) => {
    if (number) {
      result += number;

      return oneMoreNumber;
    } else {
      const sum = result;

      result = 0;

      return sum;
    }
  };

  return oneMoreNumber;
}

module.exports = makeInfinityAdder;
