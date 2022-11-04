'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let globalSum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      globalSum += num;

      return adder;
    }

    const localSum = globalSum;

    globalSum = 0;

    return localSum;
  };

  return adder;
};

module.exports = makeInfinityAdder;
