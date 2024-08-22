'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const innerFunction = (a) => {
    const x = sum;

    if (a !== undefined) {
      sum += a;

      return innerFunction;
    }
    sum = 0;

    return x;
  };

  return innerFunction;
}

module.exports = makeInfinityAdder;
