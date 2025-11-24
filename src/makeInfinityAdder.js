'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...value) => {
    if (value.length !== 0) {
      for (let i = 0; i < value.length; i++) {
        sum += value[i];
      }
    } else {
      const youSuma = sum;

      sum = 0;

      return youSuma;
    }

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
