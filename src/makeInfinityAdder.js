'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let countResult = 0;

  const adder = (a) => {
    if (!isNaN(a)) {
      countResult += a;
    } else {
      return 0;
    }

    return function addsNext(b) {
      if (!isNaN(b)) {
        countResult += b;

        return addsNext;
      } else {
        return countResult;
      }
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
