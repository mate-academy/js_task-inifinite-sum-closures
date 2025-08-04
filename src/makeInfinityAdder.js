'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const added = (num) => {
    if (typeof num === 'number') {
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
