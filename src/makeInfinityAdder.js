'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const sum = (x) => {
    if (typeof x !== 'undefined') {
      return (y) => {
        if (typeof y !== 'undefined') {
          return sum(x + y);
        } else {
          return x;
        }
      };
    }

    return 0;
  };

  return sum;
}

module.exports = makeInfinityAdder;
