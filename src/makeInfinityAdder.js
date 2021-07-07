'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const sum = (number) => {
    if (number) {
      result += number;

      return sum;
    }

    const actualSum = result;

    result = 0;

    return actualSum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
