'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (a) => {
    let sum = a;

    if (a === undefined) {
      sum = 0;

      return sum;
    }

    return function add(b) {
      if (b === undefined) {
        return sum;
      }
      sum += b;

      return add;
    };
  };
}

module.exports = makeInfinityAdder;
