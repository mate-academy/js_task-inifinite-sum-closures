'use strict';

function makeAdder() {
  let sum = 0;

  return function adder(...numbers) {
    sum += Number(numbers);

    const result = sum;

    if (numbers.length === 0) {
      sum = 0;

      return result;
    }

    return adder;
  };
}

module.exports = makeAdder;
