'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;

// const adder = makeAdder();
// adder() === 0
// adder(4)(5)() === 9
// adder() === 0
// adder(5)(5)(5)
// adder(4)
// adder() === 19
// adder() === 0
