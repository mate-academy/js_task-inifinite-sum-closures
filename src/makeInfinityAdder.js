'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let res = 0;

  const sum = (a) => {
    if (a === undefined) {
      const currentRes = res;

      res = 0;

      return currentRes;
    }

    res += a;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
