'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;
  let finalSum;

  const infiniteAdder = (...args) => {
    if (args.length) {
      counter += Number([...args]);

      return infiniteAdder;
    }

    finalSum = counter;
    counter = 0;

    return finalSum;
  };

  return infiniteAdder;
}

module.exports = makeInfinityAdder;
