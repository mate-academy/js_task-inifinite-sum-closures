'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const f = function(number) {
    if (number === undefined) {
      const sumInFunction = sum;

      sum = 0;

      return sumInFunction;
    }
    sum += number;

    return f;
  };

  return f;
}

module.exports = makeInfinityAdder;
