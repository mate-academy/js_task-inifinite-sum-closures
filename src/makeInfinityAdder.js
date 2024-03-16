'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  function adder(value) {
    if (arguments.length) {
      result += value;

      return adder;
    } else {
      const currentValue = result;

      result = 0;

      return currentValue;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
