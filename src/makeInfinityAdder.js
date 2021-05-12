'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function newFunc(addedValue) {
    if (addedValue) {
      total += addedValue;

      return newFunc;
    };

    const result = total;

    total = 0;

    return result;
  };
};

module.exports = makeInfinityAdder;
