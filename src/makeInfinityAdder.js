'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(initialValue = 0) {
  let total = initialValue;

  const added = curr => {
    if (curr === undefined) {
      const currentTotal = total;

      total = 0;

      return currentTotal;
    }

    total += curr;

    return added;
  };

  return added;
}

module.exports = makeInfinityAdder;
