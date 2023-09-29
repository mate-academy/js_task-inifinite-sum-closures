'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(value) {
  return function add(a) {
    if (a !== undefined) {
      return function(b) {
        if (b !== undefined) {
          return add(a + b);
        }

        return a;
      };
    } else {
      return 0;
    };
  };
};

module.exports = makeInfinityAdder;
