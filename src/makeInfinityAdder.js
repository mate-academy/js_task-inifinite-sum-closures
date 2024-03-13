'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(sum = 0) {
  const nextAdder = (num = undefined) => {
    if (num === undefined) {
      return sum;
    } else {
      return makeInfinityAdder(sum + num);
    }
  };

  return nextAdder;
}

module.exports = makeInfinityAdder;
