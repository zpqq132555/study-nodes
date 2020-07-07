import java.util.HashMap;

/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> tracher = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            // 判断 Map key 是否已经有这个被加数的key
            // 和 - 加数 = 被加数
            if (tracher.containsKey(nums[i])) {
                // 获取 被加数 键值对 的 val(其数的数组下标) 值
                int left = tracher.get(nums[i]);
                // 返回其数组下标{加数, 被加数}
                return new int[]{i, left};
            } else {
                // 将 被加数 和其 数组下标 以键值对方式存入{被加数, 下标}
                tracher.put(target - nums[i], i);
            }
        }
        // 都没有返回 {0, 0}
        return new int[2];
    }
}

