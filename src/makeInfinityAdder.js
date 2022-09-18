'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (addedElements) => {
    if (addedElements === undefined) {
      const returningSum = result;

      result = 0;

      return returningSum;
    }

    result += addedElements;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
