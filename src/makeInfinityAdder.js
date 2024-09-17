'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function add(arg) {
    if (arg !== undefined) {
      sum += arg;

      return add;
    } else {
      const output = sum;

      sum = 0;

      return output;
    }
  };
}

module.exports = makeInfinityAdder;
