'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  return function adder(num) {
    if (num === undefined) {
      const result = summary;

      summary = 0;

      return result;
    }

    summary += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
