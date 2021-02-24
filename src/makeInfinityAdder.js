'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addInfinite(num) {
    if (!num) {
      const sumClear = sum;

      sum = 0;

      return sumClear;
    }

    sum += num;

    return addInfinite;
  };

  return addInfinite;
}

module.exports = makeInfinityAdder;
