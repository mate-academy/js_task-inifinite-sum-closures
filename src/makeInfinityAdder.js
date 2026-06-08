'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let counter = 0;

  const add = (number) => {
    if (number === undefined) {
      const result = counter;

      counter = 0;

      return result;
    } else {
      counter += number;

      return add;
    }
  };

  return add;
}

module.exports = makeAdder;
