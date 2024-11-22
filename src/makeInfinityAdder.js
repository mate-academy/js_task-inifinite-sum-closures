'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let value = 0;

  const adder = (a) => {
    const count = value;

    if (a !== undefined) {
      value += a;

      return adder;
    } else {
      value = 0;

      return count;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
