'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a = 0) {
  return (b) => {
    if (typeof b !== 'number') {
      return a;
    }

    return makeInfinityAdder(a + b);
  };
}

module.exports = makeInfinityAdder;
