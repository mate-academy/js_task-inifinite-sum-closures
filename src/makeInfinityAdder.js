'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;
  let counterOfUndefined = 0;

  const adder = (arg) => {
    if (counterOfUndefined > 0) {
      summary = 0;
      counterOfUndefined = 0;
    }

    if (arg === undefined) {
      ++counterOfUndefined;

      return summary;
    }

    summary += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
