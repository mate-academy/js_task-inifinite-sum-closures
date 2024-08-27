'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const makeAdder = (number) => {
    if (number !== undefined) {
      sum += number;

      return makeAdder;
    }

    const lastValue = sum;

    sum = 0;

    return lastValue;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
