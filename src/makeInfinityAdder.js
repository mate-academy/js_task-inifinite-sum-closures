'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumlate = 0;

  function adder(val) {
    if (val === undefined) {
      const tmp = accumlate;

      accumlate = 0;

      return tmp;
    }

    accumlate += val;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
