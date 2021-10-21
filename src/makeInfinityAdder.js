'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function sum(el) {
    if (el === undefined) {
      const end = result;

      result = 0;

      return end;
    }

    result += el;

    return sum;
  };
}

module.exports = makeInfinityAdder;
