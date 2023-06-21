'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function addNumbers(a) {
    if (a === undefined) {
      return 0;
    }

    return (b) => {
      return b !== undefined
        ? addNumbers(a + b)
        : a;
    };
  }

  return addNumbers;
}

module.exports = makeInfinityAdder;
