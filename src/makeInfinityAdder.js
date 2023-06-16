'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = function(number) {
    if (number !== undefined) {
      sum += number;

      return addFunction;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return addFunction;
}

module.exports = makeInfinityAdder;
