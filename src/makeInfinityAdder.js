'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (val) => {
    if (val !== undefined) {
      return (arg) => {
        if (arg !== undefined) {
          return add(val + arg);
        }

        return val;
      };
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
