class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        const result = new Array(nums.length)
        let left = 0
        let right = nums.length - 1

       for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                result[left] = nums[i]
                left++
            } else {
                result[right] = nums[i]
                right--
            }
       }
        return result
    }
}
