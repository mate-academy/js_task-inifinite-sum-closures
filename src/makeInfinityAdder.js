'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (a) => {
    if (!a) {
      return 0;
    }

    let result = a;

    const sum = (b) => {
      if (typeof b !== 'number') {
        return result;
      }
      result += b;

      return sum;
    };

    return sum;
  };
}

module.exports = makeInfinityAdder;
