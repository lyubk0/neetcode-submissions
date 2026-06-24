class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let merged = ""

        let left = 0
        let right = 0

        while (left < word1.length  && right < word2.length ) {
            merged += word1[left]
            merged += word2[right]

            left++
            right++
        }

        while (left < word1.length  ) {
            merged += word1[left]
            left++
        }

        while (word2.length > right) {
            merged += word2[right]
            right++
        }

        return merged
    }
}
