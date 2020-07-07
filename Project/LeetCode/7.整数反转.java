/*
 * @lc app=leetcode.cn id=7 lang=java
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.97%)
 * Likes:    1282
 * Dislikes: 0
 * Total Accepted:    175.8K
 * Total Submissions: 533.2K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
class Solution {
    public int reverse(int x) {
        // 用 long 来接收防止 x 为 int 最大值溢出
        long r = 0;
        while (x != 0) {
            // r 每次乘以 10 加上 x 取模的值将 x 值进行反转
            r = r*10 + x%10;
            // 每次取模结束 需要 x 舍弃最后一位来计算一位的值
            x/=10;
        }
        // 判断是否超出 int 取值范围
        if (r >= Integer.MIN_VALUE || r <= Integer.MAX_VALUE) {
            return (int)r;
        }
        return 0;
    }
}

