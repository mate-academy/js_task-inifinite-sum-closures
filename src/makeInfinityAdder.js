'use strict';

//  * @return {function}
//  */
function makeAdder() {
  let count = 0;

  function adder(...args) {
    if (args.length > 0) {
      count += args[0];

      return adder;
    } else {
      const result = count;

      count = 0;

      return result;
    }
  }

  return adder;
}

module.exports = makeAdder;
