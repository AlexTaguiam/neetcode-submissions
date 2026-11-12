class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (!strs) {
      return "cannot be empty";
    }

    let encoded = "";

    for (let i = 0; i < strs.length; i++) {
      encoded += strs[i].length + "#" + strs[i];
    }

    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}

const strs = ["Hello", "World"];

const solution = new Solution();

console.log(solution.encode(strs));
