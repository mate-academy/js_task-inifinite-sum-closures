'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let adderList = [];

  const adder = (number) => {
    if (number === undefined) {
      if (adderList.length === 0) {
        return 0;
      }

      const total = adderList.reduce((sum, n) => sum + n, 0);

      adderList = [];

      return total;
    } else {
      adderList.push(number);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
