'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function add(param) {
    if (param !== undefined) {
      count += param;

      return add;
    } else {
      const result = count;

      count = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
