'use strict';

/***
 * Implement `sum` function that can be used the next way:
 *
 * sum() === 0
 * sum(1)() === 1
 * sum(2)(3)() === 5
 * sum(1)(1)(1)(1)(1)(1)(1)(1)() === 8
 *
 * Every chain is finished with empty parens ()
 *
 *
 * @return {function}
 */
function makeInfinityAdder() {
  return (a) => {
    let sum = a || 0;

    if (a === undefined) {
      const value = sum;

      sum = 0;

      return value;
    }

    const adder = (b) => {
      if (b === undefined) {
        const value = sum;

        sum = 0;

        return value;
      }

      sum += b;

      return adder;
    };

    return adder;
  };
}

module.exports = makeInfinityAdder;
