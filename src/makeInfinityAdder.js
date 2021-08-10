'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sumOfValues = 0;

  const adder = function(value) {
    if (value !== undefined) {
      sumOfValues += value;

      return adder;
    }

    const sumOfValuesToReturn = sumOfValues;

    sumOfValues = 0;

    return sumOfValuesToReturn;
  };

  return adder;
}

module.exports = makeInfinityAdder;
