'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function plus(x) {
    if (x === undefined) {
      return 0;
    }

    let sum = x;

    return function result(y) {
      if (arguments.length > 0) {
        sum += y;

        return result;
      }

      return sum;
    };
  }

  return plus;
}

module.exports = makeInfinityAdder;
