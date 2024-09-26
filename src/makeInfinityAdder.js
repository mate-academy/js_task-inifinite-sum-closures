'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const otherFunction = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return otherFunction;
  };

  return otherFunction;
}

module.exports = makeInfinityAdder;
