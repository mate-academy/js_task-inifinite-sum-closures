'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  return function makeAdder(a) {
    if (arguments.length === 0) {
      const summ = result;

      result = 0;

      return summ;
    } else {
      result += a;

      return makeAdder;
    }
  };
}

module.exports = makeInfinityAdder;
