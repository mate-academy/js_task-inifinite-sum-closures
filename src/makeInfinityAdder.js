'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const add = (value) => {
    if (value === undefined) {
      const tmp = result;

      result = 0;

      return tmp;
    }

    result += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
