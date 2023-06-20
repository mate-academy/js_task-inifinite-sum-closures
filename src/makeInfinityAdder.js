'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const hellishAdder = (n) => {
    if (n === undefined) {
      const currentResult = result;

      result = 0;

      return currentResult;
    }

    result += n;

    return hellishAdder;
  };

  return hellishAdder;
}

module.exports = makeInfinityAdder;
