'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function suma(a) {
    if (a !== undefined) {
      result += a;
    } else {
      result = 0;

      return result;
    }

    function sumb(b) {
      if (b !== undefined) {
        result += b;
      } else {
        return result;
      }

      function sumc(c) {
        if (c !== undefined) {
          result += c;
        } else {
          return result;
        }

        function sumd(d) {
          if (d !== undefined) {
            result += d;
          } else {
            return result;
          }

          function sume(e) {
            if (e !== undefined) {
              result += e;
            } else {
              return result;
            }

            function sumf(f) {
              if (f !== undefined) {
                result += f;
              } else {
                return result;
              }

              function sumg(g) {
                if (g !== undefined) {
                  result += g;
                } else {
                  return result;
                }

                function sumh(h) {
                  if (h !== undefined) {
                    result += h;
                  } else {
                    return result;
                  }

                  function sumi(i) {
                    if (i !== undefined) {
                      result += i;
                    } else {
                      return result;
                    }

                    return result;
                  }

                  return sumi;
                }

                return sumh;
              }

              return sumg;
            }

            return sumf;
          }

          return sume;
        }

        return sumd;
      }

      return sumc;
    }

    return sumb;
  }

  return suma;
}

module.exports = makeInfinityAdder;
