'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let returnValue = 0;
  let result = 0;

  return function adder(...args) {
    if (args.length !== 0) {
      result += args[0];

      return adder;
    } else {
      returnValue = result;
      result = 0;

      return returnValue;
    }
  };
}

module.exports = makeInfinityAdder;
