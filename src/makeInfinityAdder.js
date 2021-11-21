'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number1) {
    if (number1 === undefined) {
      return result;
    }

    return function(number2) {
      if (number2 === undefined) {
        result = 0;

        return number1;
      }

      result = number1 + number2;

      return adder(result);
    };
  };
}

module.exports = makeInfinityAdder;
