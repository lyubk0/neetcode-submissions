class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let temp = 0

        for (const num of nums) {
            if (num === 1) {
                temp++
                max = Math.max(max, temp)
            } else {
                temp = 0
            }
        }

        return max
    }
}