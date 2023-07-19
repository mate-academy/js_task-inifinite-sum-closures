'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  function sum(a) {
    if (a === undefined) {
      const sumResult = count;

      count = 0;

      return sumResult;
    }
    count += a;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
