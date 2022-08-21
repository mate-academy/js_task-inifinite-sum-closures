'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (num) => {
    if (num === undefined) {
      const resultFinish = result;

      result = 0;

      return resultFinish;
    }

    result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
