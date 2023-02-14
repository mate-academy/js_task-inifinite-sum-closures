'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (x) => {
    if (!x) {
      return 0;
    }

    const result = (y) => {
      if (y !== undefined) {
        return adder(x + y);
      }

      return (x);
    };

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
