'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result;

  function sum(x) {
    function add(y) {
      if (y === undefined) {
        result = 0;

        return x;
      }
      result = x + y;

      return sum(result);
    };

    if (x === undefined) {
      result = 0;

      return 0;
    }

    return add;
  }

  return sum;
}

module.exports = makeInfinityAdder;
