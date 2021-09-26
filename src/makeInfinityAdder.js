'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;
  const adder = (number) => {
    if (number) {
      summ += number;

      return adder;
    } else {
      const result = summ;

      summ = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
