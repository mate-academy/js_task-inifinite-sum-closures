'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const add = (val) => {
    if (val) {
      sum += val;

      return (b) => {
        if (b) {
          return add(b);
        } else if (b === 0) {
          return add(0);
        } else {
          const tempSum = sum;

          sum = 0;

          return tempSum;
        }
      };
    } else if (val === 0) {
      return (b) => {
        if (b) {
          return add(b);
        } else if (b === 0) {
          return add(0);
        } else {
          const tempSum = sum;

          sum = 0;

          return tempSum;
        }
      };
    } else {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
