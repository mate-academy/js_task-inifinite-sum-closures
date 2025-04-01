'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;
  const adder = (num) => {
    if (num === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
