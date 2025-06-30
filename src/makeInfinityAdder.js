'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let res = 0;

  const adder = function (key) {
    if (key === undefined) {
      const result = res;

      res = 0;

      return result;
    }

    if (key !== undefined) {
      res += key;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
