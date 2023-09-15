'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  const sum = (value) => {
    if (value === undefined) {
      const result = summary;

      summary = 0;

      return result;
    }
    summary += value;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
