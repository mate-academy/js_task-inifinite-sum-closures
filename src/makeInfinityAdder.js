'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function add(number) {
    if (number === undefined) {
      const preResult = result;

      result = 0;

      return preResult;
    }
    result += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
