'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  const adder = (arg) => {
    if (arg >= 0) {
      sum += arg;

      return adder;
    } else {
      const temp = sum;

      sum = 0;

      return temp;
    }
  };

  return adder;
}

module.exports = makeAdder;
