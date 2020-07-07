/*
 * @lc app=leetcode.cn id=9 lang=java
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.55%)
 * Likes:    724
 * Dislikes: 0
 * Total Accepted:    157K
 * Total Submissions: 277.7K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
class Solution {
    public boolean isPalindrome(int x) {
        // 0 - 10 不存在回文所以优先pass
        if (0 > x || (0 != x && x%10 ==0)) {
            return false;
        }
        int r = 0;
        // 定义变量来对比, 如果变量比 x 大 那么回文肯定不成立
        while (r < x) {
            // 将 r 乘以10来进位, x取模获取最后一位 加上 r 来进行回文对比
            r = r*10 + x%10;
            // 取模结束 x 需要舍弃尾位来计算
            x /= 10;
        }
        // 两数相等即为回文,
        // 需要注意 如果回文中间值为 0 时 r 是比 x 大10倍 同样也是回文需要特殊处理
        return (x == r || x == r/10);
    }
}

