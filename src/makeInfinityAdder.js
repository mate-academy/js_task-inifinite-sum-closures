'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  function adder(a) {
    let result = 0;

    if (a === undefined) {
      result = summary;
      summary = 0;

      return result;
    }

    summary += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
