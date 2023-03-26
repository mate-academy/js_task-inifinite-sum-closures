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

// const adder = makeInfinityAdder();

// adder(1)(2)(3)(4)(5)(0)(7)(8)(9);

module.exports = makeInfinityAdder;
