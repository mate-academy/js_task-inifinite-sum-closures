'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let counter = 0;
  const sumFunc = function (value) {
    if (counter) {
      sum = 0;

      return sum;
    }

    if (value == null) {
      counter++;

      return sum;
    }

    counter = 0;
    sum += value;

    return sumFunc;
  };

  return sumFunc;
}

module.exports = makeInfinityAdder;
