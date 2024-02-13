'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return num => {
    if (!num) {
      return 0;
    }

    let sum = num;

    function f(val) {
      if (val === undefined) {
        return sum;
      }

      sum += val;

      return f;
    }

    return f;
  };
}

module.exports = makeInfinityAdder;
