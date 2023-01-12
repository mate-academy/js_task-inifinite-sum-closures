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
    
    return adder;
  } else {
    sum = 0;

    return tempSum;
  };
}

  return adder;
}

module.exports = makeInfinityAdder;
