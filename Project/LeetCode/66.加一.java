/*
 * @lc app=leetcode.cn id=66 lang=java
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.78%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    82.2K
 * Total Submissions: 199.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
class Solution {
    public int[] plusOne(int[] digits) {
        // 从数组最后一位做判断
        for (int i = digits.length - 1; i >= 0; i--) {
            // 如果最后一位值不等于9
            if (digits[i] != 9) {
                // 下标为自加跳出循环
                digits[i]++;
                break;
            } else {
                // 等于9则该为0
                digits[i] = 0;
            }
        }
        // 数组第一位为0, 则表示数组值全部是9
        if (digits[0] == 0) {
            // 创造新的数组,长度为传进来的数组长度加一
            int[] res = new int[digits.length + 1];
            // 将数组第一位改为1 返回新数组
            res[0] = 1;
            return res;
        }
        return digits;
    }
}
// @lc code=end