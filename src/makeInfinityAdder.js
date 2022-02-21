'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (number) => {
    if (number === undefined) {
      const lastCount = count;

      count = 0;

      return lastCount;
    }

    count += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
