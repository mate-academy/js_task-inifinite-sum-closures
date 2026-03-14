'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a = 0) {
  function adder(b) {
    if (b === undefined) {
      return a;
    }

    return makeInfinityAdder(a + b);
  }

  return adder;
}

module.exports = makeInfinityAdder;
