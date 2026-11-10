'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  function adder(nextValue) {
    if (nextValue === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += nextValue;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
