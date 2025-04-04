'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function f(num) {
    if (num === undefined) {
      const sumInner = sum;

      sum = 0;

      return sumInner;
    } else {
      sum += num;

      return f;
    }
  }

  return f;
}

module.exports = makeInfinityAdder;
