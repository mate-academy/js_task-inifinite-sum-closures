'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adderFn = (value) => {
    if (value === undefined) {
      return 0;
    }

    let sum = value;

    const adder = (number) => {
      if (number === undefined) {
        return sum;
      }
      sum += number;

      return adder;
    };

    return adder;
  };

  return adderFn;
}

module.exports = makeInfinityAdder;
