'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const func = number => {
    if (number) {
      sum += number;

      return func;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return func;
}

module.exports = makeInfinityAdder;
