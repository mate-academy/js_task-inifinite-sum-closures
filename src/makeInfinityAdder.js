'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    if (number !== undefined) {
      result += number;

      return adder;
    }

    const sum = result;

    result = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
