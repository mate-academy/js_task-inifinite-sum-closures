'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  return function makeAdder(number) {
    if (number === undefined) {
      const currentSummary = summary;

      summary = 0;

      return currentSummary;
    }

    summary += number;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
