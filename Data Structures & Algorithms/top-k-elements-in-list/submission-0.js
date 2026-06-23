class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        return [...map]
            .sort(([, v1], [, v2]) => v2 - v1)
            .slice(0, k)
            .map(([num]) => num);
    }
}