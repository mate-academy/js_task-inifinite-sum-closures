'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
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

module.exports = makeInfinityAdder;
