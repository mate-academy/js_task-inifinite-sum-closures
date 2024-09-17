'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const adder = digit => {
    if (digit === undefined) {
      const returnCount = count;

      count = 0;

      return returnCount;
    }

    count += digit;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
