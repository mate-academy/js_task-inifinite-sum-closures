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

    const totalResult = result;

    result = 0;

    return totalResult;
  };

  return adder;
}

module.exports = makeInfinityAdder;
