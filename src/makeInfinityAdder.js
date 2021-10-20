'use strict';

function makeAdder() {
  let sum = 0;

  const lala = (x) => {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += x;

      return lala;
    }
  };

  return lala;
}

module.exports = makeAdder;
