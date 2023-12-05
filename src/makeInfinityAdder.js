'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = (a = null) => {
    if (a == null) {
      const last = result;

      result = 0;

      return last;
    } else {
      result += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
