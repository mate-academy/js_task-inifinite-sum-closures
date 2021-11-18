'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;

  const sumarise = (a) => {
    if (count > 0) {
      sum = 0;
    }

    if (typeof a === 'number') {
      sum += a;

      return sumarise;
    } else {
      count++;

      return sum;
    }
  };

  return sumarise;
}

module.exports = makeInfinityAdder;
