'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = number => {
    if (number === undefined) {
      const sum = result;

      result = 0;

      return sum;
    } 
    result += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
