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

    if (arguments.length === 0 && lastArgument === undefined) {
      return 0;
    }
    lastArgument = num;

    return store;
  };
}

module.exports = makeInfinityAdder;
