'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const numbers = [];

  return function adder(input) {
    if (arguments.length === 0) {
      const res = numbers.reduce((acc, curr) => acc + curr, 0);

      numbers.length = 0;

      return res;
    }
    numbers.push(input);

    return adder;
  };
}

module.exports = makeInfinityAdder;
