'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let acc = 0;

  const add = (num) => {
    if (num) {
      acc += num;

      return add;
    }

    const sum = acc;

    acc = 0;

    return sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
