'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let finaly = 0;

  const adder = (a) => {
    if (a === undefined) {
      finaly = sum;
      sum = 0;

      return finaly;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
