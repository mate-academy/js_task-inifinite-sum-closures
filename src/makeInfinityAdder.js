'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let initialResult = 0;
  let finalAmount = 0;

  function add(x) {
    if (x !== undefined) {
      initialResult += x;

      return add;
    }

    finalAmount = initialResult;
    initialResult = 0;

    return finalAmount;
  }

  return add;
};

module.exports = makeInfinityAdder;
