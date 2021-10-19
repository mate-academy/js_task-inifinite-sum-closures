'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let acc = 0;

  const adder = (num) => {
    if (num) {
      acc += num
      return adder;
    }
    if (!num) {
      let temp = acc;
      acc = 0;
      return temp;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
