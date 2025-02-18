'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let summ = 0;
  let counter = 0;
  const sumFunc = function (value) {
    if (counter) {
      summ = 0;

      return summ;
    }

    if (!value && value !== 0) {
      counter++;

      return summ;
    }

    counter = 0;
    summ += value;

    return sumFunc;
  };

  return sumFunc;
}

module.exports = makeInfinityAdder;
