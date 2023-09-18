'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let memory = 0;

  const adder = (number) => {
    if (number === undefined) {
      const sum = memory;

      memory = 0;

      return sum;
    }

    memory += number;

    return (nextNumber) => adder(nextNumber);
  };

  return adder;
}

module.exports = makeInfinityAdder;
