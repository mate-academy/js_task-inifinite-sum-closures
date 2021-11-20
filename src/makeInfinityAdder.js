'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = [];

  const adder = (number) => {
    if (number !== undefined) {
      numbers.push(number);

      return adder;
    } else {
      const result = numbers.reduce((sum, num) => sum + num, 0);

      numbers = [];

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
