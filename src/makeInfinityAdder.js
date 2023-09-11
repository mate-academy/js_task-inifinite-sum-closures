'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(initialValue = 0) {
  let counter = initialValue;

  function adder(number) {
    if (number === undefined) {
      const result = counter;

      counter = 0;

      return result;
    } else {
      counter += number;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
