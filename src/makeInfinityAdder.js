'use strict';

function makeInfinityNumber() {
  let total = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    }

    for (const num of args) {
      total += num;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityNumber;
