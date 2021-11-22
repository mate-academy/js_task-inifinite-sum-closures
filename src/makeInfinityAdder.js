'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (value) => {
    if (value !== undefined) {
      result += value;

      return adder;
    };

    const resultSum = result;

    result = 0;

    return resultSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
