'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  const adder = (operand) => {
    if (operand !== undefined) {
      summ += operand;

      return adder;
    }

    const innerSumm = summ;

    summ = 0;

    return innerSumm;
  };

  return adder;
}

module.exports = makeInfinityAdder;
