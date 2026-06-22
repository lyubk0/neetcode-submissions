class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let counter = 0

        for (const detail of details) {
            const formattedDetail = detail.slice(11).slice(0, 2)
            

            if (Number(formattedDetail) > 60) {
                counter++
            }
        }

        return counter
    }
}
