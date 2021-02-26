'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let store = 0;
  let lastArgument = 0;

  return function getSum(num) {
    if (arguments.length > 0) {
      store += num;

      return getSum;
    }

    lastArgument = store;
    store = 0;

    return lastArgument;
  };
}

module.exports = makeInfinityAdder;
