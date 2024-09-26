'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (a) => {
    if (a === undefined) {
      const total = result;

      result = 0;

      return total;
    }

    result += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
