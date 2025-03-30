'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let balance = 0;

  const adder = (v = undefined) => {
    if (v === undefined) {
      const ret = balance;

      balance = 0;

      return ret;
    } else {
      balance += v;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
