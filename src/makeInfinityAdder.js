'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total = total + a;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
