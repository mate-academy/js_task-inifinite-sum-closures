'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const adder = (input) => {
    if (input === undefined) {
      const copyCount = count;

      count = 0;

      return copyCount;
    }

    count += input;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
