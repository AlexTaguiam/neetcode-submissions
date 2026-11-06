class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const cleaned = s
      .toLowerCase()
      .replaceAll(" ", "")
      .replace(/[^\w\s]|_/g, "");

    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
  }
}

const s = "Was it a car or a cat I saw?";

const solution = new Solution();
console.log(solution.isPalindrome(s));
