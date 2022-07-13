'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = function(number) {
    if (arguments.length > 0) {
      sum += number;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return add;
}

module.exports = makeInfinityAdder;
