'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const addFunc = (prevNum) => {
    if (!prevNum) {
      const answer = sum;

      sum = 0;

      return answer;
    }
    sum += prevNum;

    return addFunc;
  };

  return addFunc;
}

module.exports = makeInfinityAdder;
