'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addNumber(argument) {
    const finalSum = sum;

    if (argument !== undefined) {
      sum += argument;

      return addNumber;
    } else {
      sum = 0;

      return finalSum;
    }
  }

  return addNumber;
}

module.exports = makeInfinityAdder;
