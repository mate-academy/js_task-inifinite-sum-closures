'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (num) => {
    if (num === undefined) {
      const newRes = result;

      result = 0;

      return newRes;
    } else {
      result += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
