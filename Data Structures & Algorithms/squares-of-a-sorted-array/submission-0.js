class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        const result = new Array(nums.length)
        let left = 0
        let right = nums.length - 1
        let position = nums.length - 1

        while (left <= right) {
            const squaredLeft = nums[left] ** 2 
            const squaredRight = nums[right] ** 2 

            if (squaredLeft > squaredRight) {
                result[position] = squaredLeft
                left++
            } else {
                result[position] = squaredRight
                right--
            }

            position--
         
        }

        return result
    }
}
