'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let counter = 0;

  const add = (x) => {
    if (x !== undefined) {
      result += x;
      counter++;

      return add;
    }

    if (counter > 0) {
      counter = 0;

      return result;
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
