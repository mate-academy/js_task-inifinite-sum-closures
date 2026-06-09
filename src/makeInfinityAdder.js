'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (a) => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return add;
  };

  return add;
}

// eslint-disable-next-line no-undef
const adder = makeInfinityAdder();

// eslint-disable-next-line no-console
console.log(
  adder(), // 0
  adder(4)(5)(), // 9
  adder(), // 0
  adder(5)(5)(5),
  adder(4),
  adder(), // 19
  adder(), // 0
);

module.exports = makeInfinityAdder;
