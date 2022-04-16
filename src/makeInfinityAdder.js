'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let check = result;

  function adder(x) {
    result = check;

    if (x === undefined) {
      check = 0;

      return result;
    }
    result += x;
    check = result;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
