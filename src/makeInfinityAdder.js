'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number !== undefined) {
      sum += number;

      return add;
    }

    const toReturn = sum;

    sum = 0;

    return toReturn;
  };

  return add;
}

module.exports = makeInfinityAdder;
