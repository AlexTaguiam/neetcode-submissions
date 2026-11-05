class Solution {
  seen = new Set();

  hasDuplicate(nums) {
    for (const num of nums) {
      if (this.seen.has(num)) {
        return true;
      }

      this.seen.add(num);
    }
    return false;
  }
}

const nums = [1, 2, 3, 3];

const solution = new Solution();
console.log(solution.hasDuplicate(nums));
