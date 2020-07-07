/*
 * @lc app=leetcode.cn id=58 lang=java
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (31.04%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    45.4K
 * Total Submissions: 145.7K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */

// @lc code=start
class Solution {
    public int lengthOfLastWord(String s) {
        // 去除前后空格的字符串长度 - 去除前后空格字符串长度中最后出现空格的字符下标减一
        return s.trim().length() - s.trim().lastIndexOf(" ") - 1;
        /* // 首尾取出空格
        s = s.trim();
        // 分割字符串
        String[] array = s.split(" ");
        // 如果分割后的长度大于 0
        if (array.length != 0) {
            // 返回最后一个字符串的长度
            return array[array.length - 1].length();
        }
        // 返回 0
        return array.length; */
    }
}
// @lc code=end

