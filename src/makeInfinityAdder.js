'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function add(num) {
    if (num === undefined) {
      const saveValue = result;

      result = 0;

      return saveValue;
    }

    result += num;

    return add;
  };
}

module.exports = makeInfinityAdder;
