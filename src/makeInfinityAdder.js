'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const sum = a => {
    if (typeof a === 'undefined') {
      return 0;
    };

    return b => b !== undefined ? sum(a + b) : a;
  };

  return sum;
}

module.exports = makeInfinityAdder;
