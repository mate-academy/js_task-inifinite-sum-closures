'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let res = 0;

  const func = (x) => {
    const resFinal = res;

    if (x === undefined) {
      res = 0;

      return resFinal;
    }
    res += x;

    return func;
  };

  return func;
}

module.exports = makeInfinityAdder;
