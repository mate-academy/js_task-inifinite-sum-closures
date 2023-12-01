'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let storeResult = 0;

  function adder(a) {
    if (typeof a === 'number') {
      storeResult += a;

      return adder;
    }

    const result = storeResult;

    storeResult = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
