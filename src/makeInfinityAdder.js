'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(initialValue = 0) {
  let total = initialValue;

  const fn = curr => {
    if (curr === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += curr;

    return fn;
  };

  return fn;
}

module.exports = makeInfinityAdder;
