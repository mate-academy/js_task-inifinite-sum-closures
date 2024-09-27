'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function makeAdder(num) {
    if (num || num === 0) {
      sum += num;

      return makeAdder;
    }

    const RESULT = sum;

    sum = 0;

    return RESULT;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
