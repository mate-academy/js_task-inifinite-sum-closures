'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalCount = 0;

  function adder(...number) {
    if (number.length === 0) {
      const result = totalCount;

      totalCount = 0;

      return result;
    }

    totalCount += number.reduce((acc, num) => acc + num, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
