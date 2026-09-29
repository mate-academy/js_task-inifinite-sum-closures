/* eslint-disable no-undef */
'use strict';

/***
 * @return {function}
 */
// eslint-disable-next-line no-unused-vars
function makeAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
