'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  const adder = function(arg) {
    if (arg || arg === 0) {
      counter += arg;

      return adder;
    } else {
      const ans = counter;

      counter = 0;

      return ans;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
