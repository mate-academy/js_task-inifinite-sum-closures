'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  function adder(value) {
    if (value === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += value;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
