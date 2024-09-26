'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const add = function(number) {
    if (arguments.length === 0) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
