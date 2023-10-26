'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (a) => {
    if (a || a === 0) {
      return (b) => {
        return b || b === 0 ? adder(a + b) : a;
      };
    } else {
      const emptyArg = 0;

      return emptyArg;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
