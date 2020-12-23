'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  const calc = number => {
    if (number === undefined) {
      const cache = accumulator;

      accumulator = 0;

      return cache;
    }

    accumulator += number;

    return calc;
  };

  return calc;
}

module.exports = makeInfinityAdder;
