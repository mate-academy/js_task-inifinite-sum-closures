function makeAdderadder() {
  let total = 0;

  function adderadder(num) {
    if (num === undefined) {
      const result = total;
      total = 0;
      return result;
    }

    total += num;
    return adderadder;
  }

  return adderadder;
}
