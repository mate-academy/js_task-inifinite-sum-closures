'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const sumNumber = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return sumNumber;
  };

  return sumNumber;
}

module.exports = makeInfinityAdder;
