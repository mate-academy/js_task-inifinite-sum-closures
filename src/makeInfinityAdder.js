'use strict';

/***
 * @return {function}
 *  * const adder = makeAdder();
adder() === 0
adder(4)(5)() === 9
adder() === 0
adder(5)(5)(5)
adder(4)
adder() === 19
adder() === 0
 */

function makeInfinityAdder() {
  let sum = 0;

  const otherFunction = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return otherFunction;
  };

  return otherFunction;
}

module.exports = makeInfinityAdder;
