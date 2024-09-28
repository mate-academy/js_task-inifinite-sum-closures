'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentTotal = 0;

  const adder = (num) => {
    if (num !== undefined) {
      currentTotal += num;

      return adder;
    }

    const resultTotal = currentTotal;

    currentTotal = 0;

    return resultTotal;
  };

  return adder;
}

module.exports = makeInfinityAdder;
