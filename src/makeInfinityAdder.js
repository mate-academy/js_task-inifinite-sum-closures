'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;
  const infinityAdder = (a) => {
    if (a === undefined) {
      const saveCount = count;

      count = 0;

      return saveCount;
    }

    count += a;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
