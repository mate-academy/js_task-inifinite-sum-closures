'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (num) => {
    if (num) {
      sum += num;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return add;
}

module.exports = makeInfinityAdder;
