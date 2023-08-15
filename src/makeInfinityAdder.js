'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let collection = 0;

  const adder = (num) => {
    if (num === undefined) {
      const sum = collection;

      collection = 0;

      return sum;
    }

    collection += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
