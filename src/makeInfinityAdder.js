'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function addResult(num) {
    if (num !== undefined) {
      sum += num;

      return addResult;
    };

    const sumForAllOptions = sum;

    sum = 0;

    return sumForAllOptions;
  };
};
module.exports = makeInfinityAdder;
