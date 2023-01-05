'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(variable) {
    if (variable === undefined) {
      const finishSum = sum;

      sum = 0;

      return finishSum;
    }

    sum += variable;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
