'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const add = (num = null) => {
    if (num === null) {
      const value = result;

      result = 0;

      return value;
    } else {
      result += num;

      return add;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
