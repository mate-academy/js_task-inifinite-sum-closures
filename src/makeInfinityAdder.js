'use strict';

// /***
//  * @return {function}
//  */

function makeInfinityAdder() {
  let count = 0;

  return function countFunction(a) {
    if (a === undefined) {
      const result = count;

      count = 0;

      return result;
    }
    count += a;

    return countFunction;
  };
}

module.exports = makeInfinityAdder;
