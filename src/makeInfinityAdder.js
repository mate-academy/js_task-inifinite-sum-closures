'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (...arg) => {
    if (arg.length === 0) {
      const resultForReturn = result;

      result = 0;

      return resultForReturn;
    }

    result += arg[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
