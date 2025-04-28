'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let addedSum = 0;

  function sumder(...args) {
    if (args.length !== 0) {
      addedSum += args.reduce((acc, itemSum) => acc + itemSum, 0);

      return sumder;
    }

    if (args.length === 0) {
      const addedSumCopy = addedSum;

      addedSum = 0;

      return addedSumCopy;
    }
  }

  return sumder;
}

module.exports = makeInfinityAdder;
