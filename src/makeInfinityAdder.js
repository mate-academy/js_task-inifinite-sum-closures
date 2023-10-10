'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return addder;
  }

  return addder;
}

module.exports = makeInfinityAdder;

const adder = makeInfinityAdder();

adder(); // 0;
adder(4)(5)(); // 9;
adder(); // 0;
adder(5)(5)(5);
adder(4);
adder(); // 19;
adder(); // 0;
