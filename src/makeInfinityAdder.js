'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const numbers = [];

  return (numberN) => {
    if (!numberN) {
      return numbers.length;
    }
    numbers.push(numberN);

    return function lastInputOperator(numberNplus1) {
      if (numberNplus1) {
        numbers.push(numberNplus1);

        return lastInputOperator;
      } else {
        const accomulatedNumbers = [...numbers];

        numbers.length = 0;

        return accomulatedNumbers.reduce((acc, curV) => acc + curV, 0);
      }
    };
  };
}

module.exports = makeInfinityAdder;
