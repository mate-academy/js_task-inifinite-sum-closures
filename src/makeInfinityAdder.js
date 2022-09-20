'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (number) => {
    const acc = sum;

    if (number !== undefined) {
      sum += number;

      return makeAdder;
    }

    sum = 0;

    return acc;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
