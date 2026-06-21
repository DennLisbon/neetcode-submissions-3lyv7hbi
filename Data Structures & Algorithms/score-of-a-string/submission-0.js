class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;
        
        // Loop up to s.length - 1 so s[i + 1] is always a valid adjacent character
        for (let i = 0; i < s.length - 1; i++) {
            score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        }
        
        return score;
    }
}
