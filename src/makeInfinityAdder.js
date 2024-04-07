'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let RESULT = 0;
  const adder = (...sumTest) => {
    if (sumTest.length === 0) {
      const temp = RESULT;

      RESULT = 0;

      return temp;
    } else {
      RESULT += sumTest.reduce((acc, item) => acc + item, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
