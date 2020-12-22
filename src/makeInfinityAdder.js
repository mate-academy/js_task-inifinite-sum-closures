'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const numbers = [];

  return function InputOperator(number) {
    if (number) {
      numbers.push(number);

      return InputOperator;
    } else {
      const accomulatedNumbers = [...numbers];

      numbers.length = 0;

      return accomulatedNumbers.reduce((acc, curV) => acc + curV, 0);
    }
  };
}

module.exports = makeInfinityAdder;
