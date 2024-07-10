'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = (...args) => {
    const actualResult = result;

    if (args.length === 0) {
      result = 0;

      return actualResult;
    }

    result += args.reduce((prev, arg) => prev + arg, 0);

    return adder;
  };

  return adder;
}

module.exports = { makeInfinityAdder };
