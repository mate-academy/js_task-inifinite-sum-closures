'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const calc = number => {
    if (number === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    count += number;

    return calc;
  };

  return calc;
}

module.exports = makeInfinityAdder;
