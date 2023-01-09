'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let storage = [];

  const addition = (value) => {
    if (value >= 0) {
      storage.push(value);

      return addition;
    } else {
      const res = storage.reduce((acc, item) => acc + item, 0);

      storage = [];

      return res;
    }
  };

  return addition;
}

module.exports = makeInfinityAdder;
