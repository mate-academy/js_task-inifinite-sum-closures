'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (n) => {
    if (n == null) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += n;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
