'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let addNumbers = 0;

  const adder = (num) => {
    if (num === undefined) {
      const res = addNumbers;

      addNumbers = 0;

      return res;
    }
    addNumbers += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
