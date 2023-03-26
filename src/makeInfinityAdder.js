'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function add(...args) {
    if (args.length === 0) {
      return 0;
    }

    let result = args[0];

    return function adder(...newArgs) {
      if (newArgs.length !== 0) {
        result += newArgs[0];

        return adder;
      }

      return result;
    };
  };
};

module.exports = makeInfinityAdder;
