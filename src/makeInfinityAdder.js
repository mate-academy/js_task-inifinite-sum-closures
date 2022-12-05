'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (num) => {
    if (num !== undefined) {
      sum += num;

      return makeAdder;
    }

    const lastValue = sum;

    sum = 0;

    return lastValue;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
