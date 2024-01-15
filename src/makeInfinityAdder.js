'use strict';

function makeInfinityAdder() {
  let count = 0;

  const infiniteAdder = (num) => {
    if (typeof num === 'number') {
      count += num;

      return infiniteAdder;
    }

    const countToReturn = count;

    count = 0;

    return countToReturn;
  };

  return infiniteAdder;
}

module.exports = makeInfinityAdder;
