'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(functions) {
  let sumOfFunctions = 0;

  const adder = function(value) {
    if (typeof value !== 'number') {
      const sumForReturn = sumOfFunctions;

      sumOfFunctions = 0;

      return sumForReturn;
    }

    sumOfFunctions += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
