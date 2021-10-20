'use strict';

function makeAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
