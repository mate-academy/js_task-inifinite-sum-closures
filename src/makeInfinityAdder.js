'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  function sum(n) {
    if (n === undefined) {
      const resCopy = res;

      res = 0;

      return resCopy;
    }

    res += n;

    return sum;
  }

  return sum;
}

module.exports = makeInfinityAdder;
