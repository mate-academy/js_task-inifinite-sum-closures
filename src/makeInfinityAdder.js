'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number >= 0) {
      sum += number;

      return adder;
    }

    const resOfAdd = sum;

    sum = 0;

    return resOfAdd;
  };

  return adder;
}

module.exports = makeInfinityAdder;
