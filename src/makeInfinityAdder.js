'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const buffer = sum;

      sum = 0;

      return buffer;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
