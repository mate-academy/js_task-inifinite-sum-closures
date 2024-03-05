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

    const currentResult = result;

    result = 0;

    return currentResult;
  };

  return adder;
}

module.exports = makeInfinityAdder;
