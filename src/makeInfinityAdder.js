'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let suma = 0;

  return function calculateSum(digit) {
    if (digit === undefined) {
      const currentSuma = suma;

      suma = 0;

      return currentSuma;
    }
    suma += digit;

    return calculateSum;
  };
}

module.exports = makeInfinityAdder;
