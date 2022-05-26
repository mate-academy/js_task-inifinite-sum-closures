'use strict';

/***
 *
 *
 */

function makeInfinityAdder() {
  let count = 0;

  function adder(params) {
    if (params === undefined) {
      const copyCount = count;

      count = 0;

      return copyCount;
    }

    count += params;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
