/*
 * @lc app=leetcode.cn id=53 lang=java
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (47.37%)
 * Likes:    1254
 * Dislikes: 0
 * Total Accepted:    101.7K
 * Total Submissions: 213.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
class Solution {
    public int maxSubArray(int[] nums) {
        // 定义最大值变量, 默认数组元素第一位 与 变量 sum 用来接收暂定最大值变量
        int res = nums[0];
        int sum = 0;
        // 超循环遍历数组
        for (int num : nums) {
            // 暂定最大值变量如果大于0则累加求和 否则 暂定最大值等于这个数值
            if (sum > 0) {
                sum += num;
            } else {
                sum = num;
            }
            // 用最大值变量接收最大值变量与暂定最大值变量中大的值
            res = Math.max(res, sum);
        }
        // 返回最大值累加和
        return res;
    }
}

