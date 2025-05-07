'use strict';

function makeInfinityAdder() {
  let total = 0;

  function add(...args) {
    if (args.length === 0) {
      const res = total;

      total = 0;

      return res;
    }

    total += args.reduce((acc, num) => acc + num, 0);

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
