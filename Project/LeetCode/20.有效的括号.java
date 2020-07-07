import java.util.Stack;

/*
 * @lc app=leetcode.cn id=20 lang=java
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.50%)
 * Likes:    1039
 * Dislikes: 0
 * Total Accepted:    119.9K
 * Total Submissions: 303K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
class Solution {
    public boolean isValid(String s) {
        //  创建一个空的栈
        Stack<Character> stack = new Stack<>();
        // 将传进来的字符串转成字符数组
        char[] chars = s.toCharArray();
        // 新循环遍历
        for (char aChar : chars) {
            // 栈为空时
            if (stack.size() == 0) {
                // 将第一个字符压入栈
                stack.push(aChar);
                // 不为空时 调用括号对称判断
                // 第一个参数为 栈堆顶部对象, 第二个参数为 新的括号对象
            } else if (isSym(stack.peek(), aChar)) {
                // 如果是成对括号则 移除栈堆顶部这个括号对象
                stack.pop();
            } else {
                // 不是成对括号, 则将这个括号对象压入栈中
                stack.push(aChar);
            }
        }
        // 遍历完栈 栈元素全部被移除 则字符串为有效
        return stack.size() == 0;
    }
    
    /**
     * 括号对称判断
     * @param c1    左边括号
     * @param c2    右边括号
     * @return      是否是成对括号
     */
    private boolean isSym(char c1, char c2) {
        return (c1 == '(' && c2 == ')') || (c1 == '[' && c2 == ']') || (c1 == '{' && c2 == '}');
    }
        /* int length;
        do {
            length = s.length();
            s = s.replace("()", "").replace("{}", "").replace("[]", "");
        } while (length != s.length());
        return s.length() == 0; */
}

