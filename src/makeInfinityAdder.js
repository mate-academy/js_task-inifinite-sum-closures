'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let summ = 0;

  const adder = (number) => {
    if (number || number === 0) {
      summ += number;

      return adder;
    }

    const result = summ;

    summ = 0;

    return result;
  };

  return adder;
};

module.exports = makeInfinityAdder;
