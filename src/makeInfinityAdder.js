'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function chainer(el) {
    if (el !== undefined) {
      sum += el;

      return chainer;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return chainer;
}

module.exports = makeInfinityAdder;
