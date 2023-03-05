'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const makeAdder = (a = 0) => {
    const adder = (b) => {
      return b !== undefined
        ? makeAdder(a + b)
        : a;
    };

    return adder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
