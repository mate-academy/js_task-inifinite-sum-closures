'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const add = number => {
    if (number === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
