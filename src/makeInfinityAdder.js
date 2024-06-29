'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let memory = [];

  const adder = (number) => {
    if (number === undefined) {
      const sum = memory.reduce((acc, curr) => acc + curr, 0);

      memory = [];

      return sum;
    } else {
      memory.push(number);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
