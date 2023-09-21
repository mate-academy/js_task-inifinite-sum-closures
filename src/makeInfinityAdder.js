'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let storedSum = 0;

  function adder(a) {
    if (a !== undefined) {
      storedSum += a;
    } else {
      storedSum = 0;

      return storedSum;
    }

    return (b) => {
      if (b === undefined) {
        return storedSum;
      } else {
        return adder(b);
      }
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
