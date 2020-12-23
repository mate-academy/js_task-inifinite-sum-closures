'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (num) => {
    if (num !== undefined) {
      sum += num;

      return add;
    }

    const save = sum;

    sum = 0;

    return save;
  };

  return add;
}

module.exports = makeInfinityAdder;
