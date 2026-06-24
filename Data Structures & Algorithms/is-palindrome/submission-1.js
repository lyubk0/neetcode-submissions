class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        const formattedS = s.toLowerCase().replace(" ", "")
        const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
        
        for (let right = s.length - 1; right >= 0; right--) {
            const isAlphabeticS = alphabet.includes(formattedS[left]) && alphabet.includes(formattedS[right])
            
            if (!isAlphabeticS) {
                continue
            }

            if (formattedS[left] !== formattedS[right]) {
                return false
            }

            left++
            
        }

        return true
    }
}
