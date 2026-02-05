'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(prevSum) {
  const currentSum = prevSum || 0;

  return (num) => {
    if (num === undefined) {
      return currentSum;
    }

    return makeInfinityAdder(currentSum + num);
  };
}

module.exports = makeInfinityAdder;
