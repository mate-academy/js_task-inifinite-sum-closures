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
    } else {
      sumInner += x;
      sumOuter = sumInner;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
