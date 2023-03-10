'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function add(x) {
    if (x !== undefined) {
      return function(y) {
        return (y !== undefined) ? add(x + y) : x;
      };
    };

    return 0;
  };
};

module.exports = makeInfinityAdder;
