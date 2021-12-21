'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  return function recursia(value) {
    if (value === undefined) {
      const cont = summ;

      summ = 0;

      return cont;
    }
    summ += value;

    return recursia;
  };
}

module.exports = makeInfinityAdder;
