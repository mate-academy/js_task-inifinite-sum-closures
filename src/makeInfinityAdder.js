'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  const adder = (...args) => {
    const totalResult = result;

    if (args.length === 0) {
      result = 0;

      return totalResult;
    }

    result += args[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
