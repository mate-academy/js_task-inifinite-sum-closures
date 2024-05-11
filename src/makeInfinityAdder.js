'use strict';

function makeInfinityAdder() {
  let args = [];

  return function adder(arg = null) {
    args.push(arg);

    // if arg is a number return adder
    if (arg !== null) {
      return adder;
    } else if (
      args[args.length - 1] === null &&
      args[args.length - 2] === null
    ) {
      args = [];

      return 0;
    } else if (
      args[args.length - 1] === null &&
      args[args.length - 2] !== null
    ) {
      return args.filter(Boolean).reduce((acc, curr) => acc + curr, 0);
    }
  };
}

module.exports = makeInfinityAdder;
