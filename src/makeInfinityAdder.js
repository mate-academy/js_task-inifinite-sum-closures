'use strict';

function makeInfinityAdder() {
  let result = 0;
  const makeAdder = (value) => {
    if (value === undefined) {
      const sum = result;

      result = 0;

      return sum;
    };
    result = result + value;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
