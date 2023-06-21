'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (a) => {
    const sum = (b) => {
      if (b >= 0) {
        result += b;

        return sum;
      }

      const temp = result;

      result = 0;

      return temp;
    };

    if (a) {
      result += a;

      return sum;
    }

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
