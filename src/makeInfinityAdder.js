'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const adder = (value) => {
    if (value === undefined) {
      const amount = count;

      count = 0;

      return amount;
    }
    count += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
