'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const func = (number) => {
    if (number === undefined) {
      const tmp = sum;

      sum = 0;

      return tmp;
    } else {
      sum += number;

      return func;
    }
  };

  return func;
}

module.exports = makeInfinityAdder;
