'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(num) {
    if (typeof num === 'undefined') {
      return 0;
    }

    let sum = 0;

    sum += num;

    return function newAdder(newNum) {
      if (typeof newNum === 'undefined') {
        const result = sum;

        sum = 0;

        return result;
      }

      sum += newNum;

      return newAdder;
    };
  };
}

module.exports = makeInfinityAdder;
