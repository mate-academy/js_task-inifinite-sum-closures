'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (a) => {
    if (a === undefined) {
      return 0;
    }

    return b => {
      if (b === undefined) {
        return a;
      }

      return adder(a + b);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
