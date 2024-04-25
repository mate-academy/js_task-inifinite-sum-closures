'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = (a = null) => {
    if (a == null) {
      const retval = result;

      result = 0;

      return retval;
    } else {
      result += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
