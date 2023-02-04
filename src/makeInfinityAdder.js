'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summa = 0;
  const sum = (x) => {
    if (x === undefined) {
      const result = summa;

      summa = 0;

      return result;
    }

    summa += x;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
