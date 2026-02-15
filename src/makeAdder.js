'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let result = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const resultForReturn = result;

      result = 0;

      return resultForReturn;
    }

    result += args.reduce((sum, x) => sum + x, 0);

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
