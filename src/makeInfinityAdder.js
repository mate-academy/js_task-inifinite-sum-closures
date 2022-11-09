'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulate = 0;

  return function adder(adderVal) {
    if (adderVal === undefined) {
      const sum = accumulate;

      accumulate = 0;

      return sum;
    };

    accumulate += adderVal;

    return adder;
  };
}

module.exports = makeInfinityAdder;
