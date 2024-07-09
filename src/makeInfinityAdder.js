'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (number) => {
    if (number === undefined) {
      const copyTotal = total;

      total = 0;

      return copyTotal;
    }

    total += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
