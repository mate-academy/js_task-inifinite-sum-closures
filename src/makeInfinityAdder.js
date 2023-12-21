'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let summary = 0;

  const adder = function add(value) {
    if (value !== undefined) {
      summary += value;

      return add;
    }

    const result = summary;

    summary = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
