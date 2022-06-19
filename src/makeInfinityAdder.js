'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(input1) {
    if (input1 === undefined) {
      const sumStorage = sum;

      sum = 0;

      return sumStorage;
    }
    sum += input1;

    return adder;
  };
}

module.exports = makeInfinityAdder;
