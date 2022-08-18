'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  // const sum = (x, y) => {
  //   return x + y;
  // };

  const adder = (a = 0) => {
    if (a) {
      return function(b) {
        if (b !== undefined) {
          return adder(a + b);
        };

        return a;
      };
    }

    return a;
  };

  return adder;
}

module.exports = makeInfinityAdder;
