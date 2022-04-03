'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let temp = 0;
  const adder = (x) => {
    if (x !== undefined) {
      temp += x;

      return adder;
    }

    const result = temp;

    temp = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
