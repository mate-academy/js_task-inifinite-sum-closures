'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (number === undefined) {
      const no = sum;

      sum = 0;

      return no;
    }

    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
