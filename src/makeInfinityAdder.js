'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  const toAdd = (number) => {
    if (!number) {
      const empty = count;

      count = 0;

      return empty;
    }
    count += number;

    return toAdd;
  };

  return toAdd;
}

module.exports = makeInfinityAdder;
