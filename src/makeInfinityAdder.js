'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const adder = function (a) {
    if (a === undefined) {
      const result = count;

      count = 0;

      return result;
    } else {
      count += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
