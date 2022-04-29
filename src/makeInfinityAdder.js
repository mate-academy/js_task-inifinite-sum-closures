'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...param) {
    if (param.length === 0) {
      const result = sum;
      sum = 0;

      return result;
    }

    sum += param[0];

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
