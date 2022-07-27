'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  function getSumm(x) {
    if (x !== undefined) {
      summ += x;

      return getSumm;
    } else {
      const result = summ;

      summ = 0;

      return result;
    }
  }

  return getSumm;
}

module.exports = makeInfinityAdder;
