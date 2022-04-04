'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const sum = (x) => {
    if (x === undefined) {
      return 0;
    }

    return (y) => {
      if (y === undefined) {
        return x;
      }

      return sum(x + y);
    };
  };

  return sum;
}

module.exports = makeInfinityAdder;
