'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  function adder(x) {
    if (x !== undefined) {
      summary += x;

      return adder;
    }

    const returnValue = summary;

    summary = 0;

    return returnValue;
  };

  return adder;
}

module.exports = makeInfinityAdder;
