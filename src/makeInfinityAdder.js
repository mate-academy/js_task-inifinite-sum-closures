'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let rezalt = 0;

  function adder(b) {
    if (b === undefined) {
      const temp = rezalt;

      rezalt = 0;

      return temp;
    }

    rezalt += b;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
