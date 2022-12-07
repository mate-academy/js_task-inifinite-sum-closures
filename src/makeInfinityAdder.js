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

    const sumToReturn = sum;

    sum = 0;

    return sumToReturn;
  };

  return add;
}

module.exports = makeInfinityAdder;
