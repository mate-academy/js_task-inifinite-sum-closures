'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (...numbers) => {
    if (!numbers.length) {
      const result = total;

      total = 0;

      return result;
    }

    total = numbers.reduce((sum, number) => sum + number, total);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
