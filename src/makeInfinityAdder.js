'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(prevSum = 0) {
  const sum = prevSum;

  return (num) => {
    if (num === undefined) {
      return sum;
    }

    return makeInfinityAdder(sum + num);
  };
}

module.exports = makeInfinityAdder;
