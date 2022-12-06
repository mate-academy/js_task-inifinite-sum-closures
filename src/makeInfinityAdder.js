'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (x) => {
    if (!x) {
      return 0;
    }

    return (y) => {
      if (y === undefined) {
        return x;
      }

      return add(x + y);
    };
  };

  return add;
}

module.exports = makeInfinityAdder;
