'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const beforeReset = sum;

      sum = 0;

      return beforeReset;
    }

    const totalSumFromArgs = args
      .reduce((accumulator, number) => accumulator + number, 0);

    sum += totalSumFromArgs;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
