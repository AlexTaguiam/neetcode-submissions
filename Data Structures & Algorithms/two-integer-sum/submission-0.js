class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  map = new Map();

  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const needed = target - nums[i];

      if (this.map.has(needed)) {
        return [this.map.get(needed), i];
      } else {
        this.map.set(nums[i], i);
      }
    }
  }
}