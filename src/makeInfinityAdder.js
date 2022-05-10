'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalResult = 0;

  const adder = (num) => {
    const result = totalResult;

    if (num === undefined) {
      totalResult = 0;

      return result;
    }

    totalResult += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
