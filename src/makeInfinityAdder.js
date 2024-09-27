'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let val = 0;
  const adder = function (n) {
    if (n === undefined) {
      const lastVal = val;

      val = 0;

      return lastVal;
    }
    val += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
