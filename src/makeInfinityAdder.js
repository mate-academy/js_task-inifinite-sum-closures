'use strict';

/***
 * @return {function}
 */
// eslint-disable-next-line no-unused-vars
const makeInfinityAdder = () => {
  let amount = 0;

  function infinityAdder(...args) {
    if (args.length === 0) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += args.reduce((acc, number) => acc + Number(number), 0);

    return infinityAdder;
  }

  return infinityAdder;
};

/**
 * const adder = makeInfinityAdder();
 * let b1 = adder(4)(5)(); // 9
 * let b2 = adder(10)(20)(); // 30
 * let a1 = adder(); // 0
 * let a2 = adder(4)(5)(); // 9
 * let a3 = adder(); // 0
 * let a4 = adder(5)(5)(5); // 15
 * let a5 = adder(4); // 19
 * let a6 = adder(); // 19
 * let a7 = adder(); // 0
 * let test = 1;
 */
