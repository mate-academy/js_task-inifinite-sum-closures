'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const make = (x) => {
    let fin = 0;

    if (x === undefined) {
      fin = sum;
      sum = 0;

      return fin;
    }
    sum += x;

    return make;
  };

  return make;
}

module.exports = makeInfinityAdder;
