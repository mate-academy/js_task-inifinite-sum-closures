'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (num = null) => {
    if (num === null) {
      const returnValue = result;

      result = 0;

      return returnValue;
    }

    result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
