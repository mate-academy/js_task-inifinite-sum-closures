'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const add = (numA) => {
    if (numA === undefined) {
      sum = 0;

      return sum;
    }
    sum += numA;

    return (numB) => {
      if (numB !== undefined) {
        return add(numB);
      } else {
        return sum;
      }
    };
  };

  return add;
}

module.exports = makeInfinityAdder;
