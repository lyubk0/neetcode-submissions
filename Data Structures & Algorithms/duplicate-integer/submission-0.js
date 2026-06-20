class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        
        for (const num of nums) {
            const existingNum = map.get(num)

            if (existingNum) return true

            map.set(num, 1)
        }

        return false
    }
}
