'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let count = 0;

  const adder = (param) => {
    if (param === undefined) {
      const result = count;

      count = 0;

      return result;
    }
    count += param;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
