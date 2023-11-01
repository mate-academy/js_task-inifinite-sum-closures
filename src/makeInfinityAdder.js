'use strict';

function makeInfinityAdder() {
  let result = 0;
  const addFunction = (number) => {
    if (number === undefined) {
      const returnValue = result;

      result = 0;

      return returnValue;
    } else {
      result = result + number;

      return addFunction;
    }
  };

  return addFunction;
}

module.exports = makeInfinityAdder;
