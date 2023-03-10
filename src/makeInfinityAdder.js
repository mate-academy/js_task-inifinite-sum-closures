'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function add(x) {
    if (x || x === 0) {
      return function(y) {
        if (y || y === 0) {
          return add(x + y);
        } else {
          return x;
        };
      };
    };

    return 0;
  };
};

module.exports = makeInfinityAdder;
