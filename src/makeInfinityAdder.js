'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function add(val) {
    if (val) {
      return (arg) => {
        if (arg || arg === 0) {
          return add(val + arg);
        }

        return val;
      };
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
