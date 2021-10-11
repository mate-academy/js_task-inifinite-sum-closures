'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function add(val1) {
    if (val1) {
      return (val2) => {
        if (val2) {
          return add(val1 + val2);
        } else {
          return val1;
        }
      };
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
