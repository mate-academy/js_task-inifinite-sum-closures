'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let emptyInput = 0;

  const hellRecursion = (value) => {
    if (emptyInput > 0) {
      sum = 0;

      return sum;
    }

    if (value === undefined) {
      emptyInput++;

      return sum;
    }

    sum += value;

    return hellRecursion;
  };

  return hellRecursion;
}

module.exports = makeInfinityAdder;
