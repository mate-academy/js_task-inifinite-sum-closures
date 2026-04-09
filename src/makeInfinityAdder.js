'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let accumulator = 0;

  const adder = (value) => {
    if (value === undefined) {
      const temp = accumulator;

      accumulator = 0;

      return temp;
    }
    accumulator += value;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
