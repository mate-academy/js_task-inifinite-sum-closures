'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  const adder = function(number) {
    if (number === undefined) {
      const rez = summ;

      summ = 0;

      return rez;
    }

    summ += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
