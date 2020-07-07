/*
 * @lc app=leetcode.cn id=121 lang=java
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (50.67%)
 * Likes:    581
 * Dislikes: 0
 * Total Accepted:    86.1K
 * Total Submissions: 168.5K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        /**
         * 有 买入(buy) 和 卖出(sell) 这两种状态
         * 对于买来说,买之后可以卖出(进入卖状态),也可以不再进行股票交易(保持买状态).
         * 对于卖来说,卖出股票后不在进行股票交易(还在卖状态).
         * 只有在手上的钱才算钱,手上的钱购买当天的股票后相当于亏损.
         * 也就是说当天买的话意味着损失-prices[i],当天卖的话意味着增加prices[i],
         * 当天卖出总的收益就是buy+prices[i] 。
         * 所以我们只要考虑当天买和之前买哪个收益更高,当天卖和之前卖哪个收益更高.
         * buy = max(buy, -price[i]) (注意：根据定义 buy 是负数)
         * sell = max(sell, prices[i] + buy)
         * 边界 第一天 buy = -prices[0], sell = 0，最后返回 sell 即可.
         */
        if (prices.length <= 1)
        {
            return 0;
        }
        int buy = -prices[0], sell = 0;
        for (int i = 1; i < prices.length; i++)
        {
            buy = Math.max(buy, -prices[i]);
            sell = Math.max(sell, prices[i] + buy);
        }
        return sell;
    }
}
// @lc code=end
