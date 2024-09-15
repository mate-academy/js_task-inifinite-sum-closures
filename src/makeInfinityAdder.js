'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const add = (a) => {
    if (typeof a !== 'number') {
      const temp = sum;

      sum = 0;

      return temp;
    }
    sum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
