'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (...a) => {
    if (a.length) {
      result += +a;

      return adder;
    }

    const returnValue = result;

    result = 0;

    return returnValue;
  };

  return adder;
}

module.exports = makeInfinityAdder;
