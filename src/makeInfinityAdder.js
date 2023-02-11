'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function add(value) {
    if (value === undefined) {
      const copyResult = result;

      result = 0;

      return copyResult;
    }

    result += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
