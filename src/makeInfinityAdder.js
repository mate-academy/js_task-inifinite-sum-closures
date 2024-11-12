'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }
    counter += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
