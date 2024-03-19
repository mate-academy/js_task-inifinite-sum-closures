('use strict');

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const func = (param) => {
    if (param || param === 0) {
      sum += param;

      return func;
    } else {
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return func;
}

module.exports = makeInfinityAdder;
