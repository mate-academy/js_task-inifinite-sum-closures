'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (...num) => {
    if (num.length === 0) {
      const result = sum;
      sum = 0;

      return result;
    } else {
      sum += num.reduce((acc, current) => acc + current, 0);

      return add;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
