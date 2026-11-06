class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  map = new Map();

  groupAnagrams(strs) {
    for (const str of strs) {
      const sorted = str.split("").sort().join("");

      if (!this.map[sorted]) {
        this.map[sorted] = [];
      }

      this.map[sorted].push(str);
    }
    return Object.values(this.map);
  }
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

const solution = new Solution();
console.log(solution.groupAnagrams(strs));
