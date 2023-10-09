'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let value = 0;

  const f = (x) => {
    if (x === undefined) {
      const res = value;

      value = 0;

      return res;
    }

    value += x;

    return f;
  };

  return f;
}

module.exports = makeInfinityAdder;
