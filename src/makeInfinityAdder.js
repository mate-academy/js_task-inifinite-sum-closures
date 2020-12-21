'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const getSum = (val) => {
    if (val) {
      return (args) => {
        if (args) {
          return getSum(val + args);
        } else {
          return val;
        }
      };
    }

    return 0;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
