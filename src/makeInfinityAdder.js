'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const addCalculate = (number) => {
    if (typeof number !== 'number') {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += number;

    return addCalculate;
  };

  return addCalculate;
}

module.exports = makeInfinityAdder;
