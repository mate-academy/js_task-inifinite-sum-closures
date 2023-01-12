'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
  const tempSum = sum;

  if (x !== undefined) {
    sum += x;
  } else {
    sum = 0;
  };

  return x === undefined
    ? tempSum
    : adder;
}

  return adder;
}

module.exports = makeInfinityAdder;
