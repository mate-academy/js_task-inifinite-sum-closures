'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let counter = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }
    counter += a;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
