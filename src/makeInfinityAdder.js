'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  const adder = function(number) {
    const result = accumulator;

    if (number === undefined) {
      accumulator = 0;

      return result;
    }

    accumulator += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
