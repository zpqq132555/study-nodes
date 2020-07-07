/*
 * @lc app=leetcode.cn id=88 lang=java
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.26%)
 * Likes:    324
 * Dislikes: 0
 * Total Accepted:    74.3K
 * Total Submissions: 163.3K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        while (n > 0) {
            /*
            num1[n+m-1]  表示从最后一位开始找 这样可以不用辅助空间
            m == 0 表示nums1[0] 做nums1[m - 1]会抛出IndexOutofBoundsException
            nums2[n - 1] > nums1[m - 1] 判断nums2数组值需要添加的位置判断
            --n --m 则表示是先自减来确定具体数值
            以 输入 nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3 为例
            具体代码过程:
            m = 3 n = 3
            nums1[5] = (false || nums2[2] > nums1[2])
                     = nums2[2]
            [1,2,3,0,0,6]
            m = 3 n = 2
            nums1[4] = (false || nums2[1] > nums1[2])
                     = nums2[1]
            [1,2,3,0,5,6]
            m = 3 n = 1
            nums1[3] = (false || nums2[0] > nums1[2])
                     = nums1[2]
            [1,2,3,3,5,6]
            m = 2 n = 1
            nums1[2] = (false || nums2[0] > nums1[1])
                     = nums1[1]
            [1,2,2,3,5,6]
            m = 1 n = 1
            nums1[1] = (flase || nums2[0]> nums1[0])
                     = nums2[0]
            [1,2,2,3,5,6]
            */
            nums1[m + n - 1] = (m == 0 || nums2[n - 1] > nums1[m - 1]) ? nums2[--n] : nums1[--m];
        }
    }
}
// @lc code=end

