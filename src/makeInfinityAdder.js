'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (args) => {
    let resultSum = 0;

    if (typeof (args) !== 'number') {
      resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += args;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
