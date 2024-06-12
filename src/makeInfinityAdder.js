'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (val) => {
    if (val !== undefined) {
      sum = val;

      return (arg) => {
        if (arg !== undefined) {
          sum += arg;

          return add(sum);
        }

        const currSum = sum;

        sum = 0;

        return currSum;
      };
    }
    sum = 0;

    return sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
