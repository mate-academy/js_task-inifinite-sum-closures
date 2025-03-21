'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let summ = 0;

  const adder = (number) => {
    if (number === undefined) {
      const result = summ;

      summ = 0;

      return result;
    }

    summ += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
