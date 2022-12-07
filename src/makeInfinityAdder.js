'use strict';

function makeInfinityAdder() {
  let result = 0;

  const add = a => {
    if (a === undefined) {
      const output = result;

      result = 0;

      return output;
    }

    result += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
