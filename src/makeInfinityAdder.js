'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;
  let output = false;

  const getSum = function(num) {
    if (output) {
      counter = 0;
    };

    if (arguments.length !== 0) {
      counter += num;

      return getSum;
    } else {
      output = true;

      return counter;
    }
  };

  return getSum;
}

module.exports = makeInfinityAdder;
