'use strict';
/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;
  const adder = function(x) {
    if (x === undefined) {
      const k = summ;

      summ = 0;

      return k;
    } else {
      summ += x;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
