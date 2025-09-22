/* eslint-disable no-console */
'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  function adder(number) {
    if (number !== undefined && number !== null) {
      result += number;

      return adder;
    } else {
      const temp = result;

      result = 0;

      return temp;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
