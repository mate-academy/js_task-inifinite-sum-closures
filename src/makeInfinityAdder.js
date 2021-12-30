'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOuter = 0;

  const adder = (x) => {
    let sumInner = sumOuter;

    if (x === undefined) {
      sumOuter = 0;

      return sumInner;
    }
    sumOuter += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
