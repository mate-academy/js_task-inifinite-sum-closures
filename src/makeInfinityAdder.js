'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const added = (num) => {
    if (num !== undefined) {
      sum += num;

      return added;
    } else {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return added;
}

module.exports = makeInfinityAdder;
