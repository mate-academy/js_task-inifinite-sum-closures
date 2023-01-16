'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = 0;

  return function adder(num) {
    if (typeof num === 'number') {
      numbers += num;

      return adder;
    }

    const result = numbers;

    numbers = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
