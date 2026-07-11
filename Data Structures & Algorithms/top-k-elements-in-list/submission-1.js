class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: Count the frequency of each element
        const countMap = new Map();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // Step 2: Create buckets where index = frequency
        // The maximum possible frequency is nums.length
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, freq] of countMap.entries()) {
            buckets[freq].push(num);
        }

        // Step 3: Collect the top k frequent elements from right to left
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
            if (result.length === k) {
                return result;
            }
        }

        return result;
    }
}
