'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let countBank = 0;

  return function digit(...args) {
    if (args.length === 0) {
      const temp = countBank;

      countBank = 0;

      return temp;
    }

    countBank += args[0];

    return digit;
  };
}

module.exports = makeAdder;
