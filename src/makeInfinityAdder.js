'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  const adder = (num) => {
    const total = result;

    if (num === undefined) {
      result = 0;

      return total;
    }

    result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
