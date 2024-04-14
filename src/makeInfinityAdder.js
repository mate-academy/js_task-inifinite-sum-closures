'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (...args) => {
    if (args.length !== 0) {
      total += args.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );
    } else {
      const resultAdder = total;

      total = 0;

      return resultAdder;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
