'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let adderInput = 0;

  const adder = (n) => {
    if (n === undefined) {
      const res = adderInput;

      adderInput = 0;

      return res;
    };

    adderInput += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;

// const adder = makeInfinityAdder();
//
// const actual = adder(1)(10)();
