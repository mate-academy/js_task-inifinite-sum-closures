'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  let sum = 0;

  function adder() {
    if (arguments.length > 0) {
      sum += arguments[0];

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
