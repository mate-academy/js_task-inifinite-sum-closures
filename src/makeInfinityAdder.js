'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const arr = [];

  const f = (x) => {
    if (x === undefined) {
      const summ = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      arr.length = 0;

      return summ;
    }

    arr.push(x);

    return f;
  };

  return f;
}

module.exports = makeInfinityAdder;
