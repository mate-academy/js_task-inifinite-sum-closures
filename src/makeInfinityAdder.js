'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let acc = 0;
  const sum = (num) => {
    if (num === undefined) {
      const result = acc;

      acc = 0;

      return result;
    } else {
      acc += num;

      return sum;
    }
  };

  return sum;
}

module.exports = makeInfinityAdder;
