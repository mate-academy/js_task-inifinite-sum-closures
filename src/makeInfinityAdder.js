'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  return function add(val) {
    if (val === undefined) {
      const totalRes = res;

      res = 0;

      return totalRes;
    }

    res += val;

    return add;
  };
}

module.exports = makeInfinityAdder;
