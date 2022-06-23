'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const infinityAdder = function(digital) {
    if (digital === undefined) {
      const returnTotal = total;

      total = 0;

      return returnTotal;
    }

    total += digital;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
