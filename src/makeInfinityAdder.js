'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let flag = false;

  const add = (x) => {
    if (flag) {
      flag = !flag;
      sum = 0;
    }

    if (x === undefined) {
      flag = !flag;

      return sum;
    }

    sum += x;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
