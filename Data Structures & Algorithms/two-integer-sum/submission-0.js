class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i]
            for (let j = i + 1; j < nums.length; j++) {
                sum += nums[j]

                if (sum === target) return [i, j]
                sum = nums[i]
            }
        }
    }
}
