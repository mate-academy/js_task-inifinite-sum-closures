'use strick'

function makeAdder() {
  let total = 0;

  function innerSum(b) {
    if (arguments.length === 0) {
      const result = total;

      total = 0;

      return result;
    }
    total += b;

    return innerSum;
  }

  return innerSum;
  // write code here
}

module.exports = makeAdder;
