'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  const adder = (param) => {
    if (param === undefined) {
      const newSummary = summary;

      summary = 0;

      return newSummary;
    }

    summary += param;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
