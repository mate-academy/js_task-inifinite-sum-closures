'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  const adder = (x) => {
    if (x === undefined) {
      const temp = summ;

      summ = 0;

      return temp;
    }
    summ += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
