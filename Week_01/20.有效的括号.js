/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 解题思路：遇到左括号进栈，右括号出栈，最后看栈底是否还有元素
 */
var isValid = function (s) {
  // 第一遍 自己解
  // 1. 长度必须是偶数对
  if (s.length % 2) {
    return false;
  }
  let stack = [];
  for (let i of s) {
    if (i === '(') {
      stack.push(')');
    } else if (i === '{') {
      stack.push('}');
    } else if (i === '[') {
      stack.push(']');
    } else if (i !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end
