'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const summ = (x) => {
    if (x === undefined) {
      const middle = result;

      result = 0;

      return middle;
    }

    result += x;

    return summ;
  };

  return summ;
}

module.exports = makeInfinityAdder;
