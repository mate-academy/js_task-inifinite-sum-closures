'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let doReset = 0;

  const nextAction = (num) => {
    if (!num && doReset === 0) {
      doReset++;

      return sum;
    }

    if (doReset > 0) {
      sum = 0;

      return sum;
    }

    sum += num;

    return nextAction;
  };

  return nextAction;
}

module.exports = makeInfinityAdder;
