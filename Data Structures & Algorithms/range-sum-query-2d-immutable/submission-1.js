class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        const m = matrix.length;
        const n = matrix[0].length;
        
        // Create a 2D array padded with 0s. 
        // Dimensions: (m + 1) x (n + 1)
        this.dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

        // Fill the DP table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.dp[i][j] = matrix[i - 1][j - 1] 
                              + this.dp[i - 1][j] 
                              + this.dp[i][j - 1] 
                              - this.dp[i - 1][j - 1];
            }
        }
    }

    /** * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        // Use the inclusion-exclusion principle using the 1-indexed DP table
        return this.dp[row2 + 1][col2 + 1] 
             - this.dp[row1][col2 + 1] 
             - this.dp[row2 + 1][col1] 
             + this.dp[row1][col1];
    }
}