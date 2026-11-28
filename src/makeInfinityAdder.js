'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let cnt = 0;

  const adder = (x) => {
    if (x === undefined) {
      const result = cnt;

      cnt = 0;

      return result;
    } else {
      cnt += x;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
