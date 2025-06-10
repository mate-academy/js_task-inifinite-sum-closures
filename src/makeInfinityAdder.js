'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  const adder = (...values) => {
    const sum = values.reduce((acc, value) => acc + value, 0);

    total += sum;

    if (values.length === 0) {
      const result = total;

      total = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
