'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = function(number) {
    if (arguments.length === 0) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
