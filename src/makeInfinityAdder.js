'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x) {
  let result = 0;
  const adder = (...args) => {
    if (args.length > 0) {
      result += args[0];

      return adder;
    } else {
      const temp = result;

      result = 0;

      return temp;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
