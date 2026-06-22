class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const splittedS = s.split(" ")

        for (let i = splittedS.length - 1; i >= 0; i--) {
            console.log(splittedS)

            if (splittedS[i]) {
                return splittedS[i].length
            }
        }
    }
}
