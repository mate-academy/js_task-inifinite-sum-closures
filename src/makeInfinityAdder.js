'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let resultSum = 0;

  return function func(number) {
    let tempSum = 0;

    if (number === undefined) {
      tempSum = resultSum;
      resultSum = 0;

      return tempSum;
    }
    resultSum += number;

    return func;
  };
}

module.exports = makeInfinityAdder;
