'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return (firstNumber) => {
    if (!firstNumber) {
      return sum;
    }

    sum += firstNumber;

    return secondNumber => {
      if (!secondNumber) {
        return sum;
      }

      sum += secondNumber;
    }
  };
}

module.exports = makeInfinityAdder;
