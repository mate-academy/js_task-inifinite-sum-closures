'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const f = add => {
    if (add !== undefined) {
      counter += add;

      return f;
    }

    const temp = counter;

    counter = 0;

    return temp;
  };

  return f;
}

module.exports = makeInfinityAdder;
