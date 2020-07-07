/*
 * @lc app=leetcode.cn id=14 lang=java
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.62%)
 * Likes:    685
 * Dislikes: 0
 * Total Accepted:    117.6K
 * Total Submissions: 339.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        // 处理不存在公共前缀
        if (strs.length < 1 || strs == null) {
            return "";
        }
        // 处理数组仅一个的时候处理
        if (strs.length == 1) {
            return strs[0];
        }
        
        // 最短字符串的长度预设第一个
        int len = strs[0].length();
        // 存储最短字符串的下标
        int shortest = 0;
        // 找出最短的字符串
        for (int i = 1; i < strs.length; i++) {
            if (strs[i].length() < len) {
                // 找出最短字符串并记录下标
                len = strs[i].length();
                shortest = i;
            }
        }
        // 获取最短字符串具体内容
        String sub = strs[shortest];
        for (int i = 0; i < strs.length; i++) {
            // 找出最短字符串在其他字符串出现的下标
            while (strs[i].indexOf(sub) != 0) {
                // 如果等于零表示没有 那么缩短字符串继续比较
                sub = sub.substring(0, sub.length()-1);
            }
        }
        return sub;
    }
}

