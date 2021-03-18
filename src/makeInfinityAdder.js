'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adding = (argument) => {
    if (argument !== undefined) {
      sum += argument;

      return adding;
    }

    const returnValue = sum;

    sum = 0;

    return returnValue;
  };

  return adding;
}

module.exports = makeInfinityAdder;
