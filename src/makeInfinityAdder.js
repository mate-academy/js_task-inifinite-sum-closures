'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let theSum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const result = theSum;

      theSum = 0;

      return result;
    }

    theSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
