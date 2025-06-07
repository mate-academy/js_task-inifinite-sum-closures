'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;
  let result = 0;

  return function adder(...args) {
    if (args.length !== 0) {
      count += args[0];
    } else {
      result = count;
      count = 0;
    }

    if (count > 0) {
      return adder;
    } else {
      return result;
    }
  };
}

module.exports = makeInfinityAdder;
