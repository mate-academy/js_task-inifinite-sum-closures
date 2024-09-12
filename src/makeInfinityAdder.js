'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let res = 0;

  const sum = (value) => {
    if (value === undefined) {
      const currentRes = res;

      res = 0;

      return currentRes;
    }

    res += value;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
