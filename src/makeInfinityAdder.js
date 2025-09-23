'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  return function params(a = null) {
    if (a === null) {
      const summ = result;

      result = 0;

      return summ;
    } else {
      result += a;

      return params;
    }
  };
}

module.exports = makeInfinityAdder;
