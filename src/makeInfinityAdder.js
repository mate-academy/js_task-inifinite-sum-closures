'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function sum(b) {
    let temp;

    if (b !== undefined) {
      result += b;

      return sum;
    } else {
      temp = result;
      result = 0;

      return temp;
    }
  };
}

module.exports = makeInfinityAdder;
