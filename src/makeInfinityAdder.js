'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (num = 'noMoreArgs') => {
    if (num === 'noMoreArgs') {
      return total;
    }
    total += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
