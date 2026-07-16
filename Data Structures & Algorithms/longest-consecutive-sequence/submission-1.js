class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // 1. Insert all numbers into a Set to allow O(1) lookups
        const numSet = new Set(nums);
        let longestStreak = 0;

        // 2. Iterate through the set
        for (const num of numSet) {
            // Check if 'num' is the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Build the sequence forward
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                // Update the maximum length found
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}