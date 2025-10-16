'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const makeAdder = (add) => {
    if (typeof add !== 'undefined') {
      sum += add;

      return makeAdder;
    } else {
      const temp = sum;

      sum = 0;

      return temp;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
