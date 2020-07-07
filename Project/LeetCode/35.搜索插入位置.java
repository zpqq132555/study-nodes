/*
 * @lc app=leetcode.cn id=35 lang=java
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (44.27%)
 * Likes:    321
 * Dislikes: 0
 * Total Accepted:    73.6K
 * Total Submissions: 166.2K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */
class Solution {
    public int searchInsert(int[] nums, int target) {
        // 定义查找的数组最低与最高位下标
        int low = 0;
        int high = nums.length - 1;
        // 如果给定的数组是空则直接返回0
        if (nums.length == 0 || nums == null) {
            return 0;
        }
        // 低位与高位下标相同则任意其一 (返回低位下标来兼容低位大于高位判断)
        // 低位大于高位下标则为最低位返回
        while (low <= high) {
            // 计算中间位下标进行二分
            // >>> 不带符号位移运算 计算结果为 x/2^n 左值 x 右值 n 即 x>>>n (具体可参考二进制右移运算)
            // 此处即为 (low + high)/2, 但右移运算比除法运算效率要高
            int mid = (low + high) >>> 1;
            // 数组中间值大于给定数值
            if (nums[mid] > target) {
                // 高位下标 -1, 即舍弃二分中大值部分 继续运算
                high = mid - 1;
            // 数组中间值小于给定数值
            } else if (nums[mid] < target) {
                // 低位下标 +1, 即舍弃二分中小值部分 继续运算
                low = mid + 1;
            } else {
                // 等于给定数值直接返回
                return mid;
            }
        }
        return low;
        /* // api
        int result = Arrays.binarySearch(nums, target);
        return result >= 0 ? result : -result - 1; */
        /* // 自我解题
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return i;
            }
        }
        return nums.length; */
    }
}

