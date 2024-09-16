'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const returnResult = (result) => {
    sum = 0;

    return result;
  };

  const curried = (number) => {
    if (number === undefined) {
      return returnResult(sum);
    }
    sum += number;

    return curried;
  };

  return curried;
}

module.exports = makeInfinityAdder;
