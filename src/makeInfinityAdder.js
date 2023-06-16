'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = function(number) {
    if (typeof number === 'number') {
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
