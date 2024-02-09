'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (typeof num === 'number') {
      sum += num;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  if (arguments.length > 0) {
    return adder(...arguments);
  } else {
    return adder;
  }
}
module.exports = makeInfinityAdder;
