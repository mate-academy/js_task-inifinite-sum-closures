'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function add(a) {
    if (a === undefined) {
      const lastResult = result;

      result = 0;

      return lastResult;
    } else {
      result += a;
    }

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
