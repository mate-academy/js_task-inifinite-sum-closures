'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const infinityAdder = (number) => {
    let no = number;

    while (no) {
      sum += no;
      no = 0;

      return infinityAdder;
    }

    if (!number) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
