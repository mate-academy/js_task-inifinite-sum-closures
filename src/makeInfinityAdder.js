'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (addedElement) => {
    if (addedElement === undefined) {
      const returningSum = result;

      result = 0;

      return returningSum;
    }

    result += addedElement;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
