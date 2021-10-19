'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function getSummary(firstNumber) {
    if (firstNumber) {
      return function(secondNumber) {
        if (secondNumber) {
          return getSummary(firstNumber + secondNumber);
        } else {
          return firstNumber;
        }
      };
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
