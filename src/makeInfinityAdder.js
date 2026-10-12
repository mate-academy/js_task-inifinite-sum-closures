'use strict';

/***
 * @return {function}
 */

function makeAdder() {
  let save = 0;

  const adder = function (val) {
    if (val !== undefined) {
      save += val;

      return adder;
    }

    const result = save;

    save = 0;

    return result;
  };

  return adder;
}

module.exports = makeAdder;
