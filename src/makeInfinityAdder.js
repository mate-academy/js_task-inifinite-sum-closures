'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let storedResult = 0;

  function adder(a) {
    if (typeof a === 'number') {
      storedResult += a;

      return adder;
    }

    const result = storedResult;

    storedResult = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
