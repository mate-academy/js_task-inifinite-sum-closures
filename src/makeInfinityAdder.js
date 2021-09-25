'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number !== undefined) {
      sum += number;

      return add;
    } else {
      const temp = sum;

      sum = 0;

      return temp;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
