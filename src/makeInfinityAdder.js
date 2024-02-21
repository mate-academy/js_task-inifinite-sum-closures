'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (num = 'noMoreArgs') => {
    if (num === 'noMoreArgs') {
      const oldTotal = total;

      total = 0;

      return oldTotal;
    }

    total += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
