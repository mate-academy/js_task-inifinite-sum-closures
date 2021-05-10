'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // let result = 0;
  // let tempResult;

  // const makeAdder = (...values) => {
  //   if (values.length === 0) {
  //     tempResult = result;
  //     result = 0;

  //     return tempResult;
  //   }

  //   result += values[0];
  // }
  //   return makeAdder;
  // }
  let result = 0;
  let tempResult;
  const makeAdder = (...args) => {
    if (args.length === 0) {
      tempResult = result;
      result = 0;

      return tempResult;
    }
    result += args[0];

    return makeAdder;
  };

  return makeAdder;
};

module.exports = makeInfinityAdder;
