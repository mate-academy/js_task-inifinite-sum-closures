'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...parameters) {
    if (parameters.length > 0) {
      sum += parameters.reduce((total, param) => total + param, 0);
      return adder;
    } else {
      const result = sum;
      sum = 0;
      return result;
    }
  }

  return adder;
}


module.exports = makeInfinityAdder;
