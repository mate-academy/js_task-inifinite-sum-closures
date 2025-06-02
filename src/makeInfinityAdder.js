'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  return function adder(...value) {
    if (value.length === 0) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    for (let i = 0; i < value.length; i++) {
      result += value[i];
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
