'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result;

  return function first(num1) {
    if (arguments.length === 0) {
      return 0;
    }

    result = num1;

    return function second(num2) {
      if (num2 || num2 === 0) {
        result += num2;

        return first(result);
      }

      return result;
    };
  };
};

module.exports = makeInfinityAdder;
