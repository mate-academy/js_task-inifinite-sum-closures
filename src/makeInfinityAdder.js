'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const result = (number) => {
    if (number === undefined) {
      const sumEnd = sum;

      sum = 0;

      return sumEnd;
    }
    sum += number;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
