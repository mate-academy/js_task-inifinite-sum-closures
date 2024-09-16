'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let callCounter = 0;

  const sum = function (numberTosum) {
    if (numberTosum !== undefined) {
      callCounter += numberTosum;

      return sum;
    }

    const copyCallCounter = callCounter;

    callCounter = 0;

    return copyCallCounter;
  };

  return sum;
}

module.exports = makeInfinityAdder;
