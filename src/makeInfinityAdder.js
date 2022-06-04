'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function add(num) {
    if (num === undefined) {
      const emptyCall = count;

      count = 0;

      return emptyCall;
    }

    count += num;

    return add;
  };
}

module.exports = makeInfinityAdder;
