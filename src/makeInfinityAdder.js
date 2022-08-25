'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let middleValue = 0;

  return function adder(value) {
    if (value !== undefined) {
      middleValue += value;

      return adder;
    } else {
      const resultValue = middleValue;

      middleValue = 0;

      return resultValue;
    }
  };
}

module.exports = makeInfinityAdder;
