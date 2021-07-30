'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const calculate = (value) => {
    if (value === undefined) {
      const nullValue = sum;

      sum = 0;

      return nullValue;
    }
    sum += value;

    return calculate;
  };

  return calculate;
}

module.exports = makeInfinityAdder;
