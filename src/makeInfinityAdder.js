'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function num1(a) {
    if (a !== undefined) {
      return function num2(b) {
        if (b !== undefined) {
          return num1(a + b);
        }

        return a;
      };
    } else {
      return 0;
    }
  };
}

module.exports = makeInfinityAdder;
