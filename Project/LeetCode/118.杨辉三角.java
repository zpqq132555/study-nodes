import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=118 lang=java
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.90%)
 * Likes:    191
 * Dislikes: 0
 * Total Accepted:    39.9K
 * Total Submissions: 62.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
class Solution {
    public List<List<Integer>> generate(int numRows) {
        // 创建需要返回的 集合 与 子集合
        List<List<Integer>> allRows = new ArrayList<>();
        List<Integer> rows = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            // 向子集合第一个元素添加元素1
            rows.add(0, 1);
            for (int j = 1; j < rows.size()-1; j++) {
                // 当子集合超过两个元素的时候做杨辉三角运算
                rows.set(j, rows.get(j) + rows.get(j+1));
            }
            // 将子集合 添加至需要返回集合
            allRows.add(new ArrayList<Integer>(rows));
        }
        return allRows;
    }
}
// @lc code=end

