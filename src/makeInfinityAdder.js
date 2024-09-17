'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentResult = 0;
  let result = 0;

  function adder(value) {
    if (arguments.length !== 0) {
      currentResult += value;

      return adder;
    }
    result = currentResult;
    currentResult = 0;

    return result;
  }

  return adder;
}

module.exports = makeInfinityAdder;
