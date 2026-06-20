class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const map = new Map()

        for (const letter of s) {
            map.set(letter, (map.get(letter) ?? 0) + 1)
        }

        for (const letter of t) {
            const existingValue = map.get(letter)

            if (!existingValue) return false

            if (existingValue == 1) {
                map.delete(letter)
            } else {
                map.set(letter, existingValue - 1)
            }

               
        }

        return [...map].length === 0
    }
}
