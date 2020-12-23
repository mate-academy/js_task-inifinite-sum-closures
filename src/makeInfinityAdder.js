'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const nextAction = (num) => {
    if (!num) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return nextAction;
  };

  return nextAction;
}

module.exports = makeInfinityAdder;
