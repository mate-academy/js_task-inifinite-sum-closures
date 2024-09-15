'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  function adder(a) {
    if (a === undefined) {
      return 0;
    }

    return (y) => {
      if (y === undefined) {
        return a;
      } else {
        return adder(a + y);
      }
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
