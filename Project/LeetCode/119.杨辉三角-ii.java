import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=119 lang=java
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (57.79%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    25.9K
 * Total Submissions: 44.3K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>();
        // 给定的索引为 <= 33,中任意值, 计算最后一次List
        for (int i = 0; i <= rowIndex; i++) {
            row.add(0, 1);
            // 当List中元素 < 2位 则开始杨辉三角计算,
            for (int j = 1; j < row.size()-1; j++) {
                // 在需要插入下标位置后面计算前后两个位置的和进行插入
                row.set(j, row.get(j) + row.get(j + 1));
            }
        }
        return row;
    }
}
// @lc code=end

