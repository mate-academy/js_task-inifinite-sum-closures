'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (i) => {
    if (!i && i !== 0) {
      const copyOfSum = sum;

      sum = 0;

      return copyOfSum;
    }

    sum += i;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
