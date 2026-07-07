class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let n = nums.length;

        // Step 1: Build a max heap
        // Start from the last non-leaf node and heapify each node up to the root
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(nums, n, i);
        }

        // Step 2: Extract elements from the heap one by one
        for (let i = n - 1; i > 0; i--) {
            // Move the current root (largest element) to the end of the array
            [nums[0], nums[i]] = [nums[i], nums[0]];

            // Call max heapify on the reduced heap
            this.heapify(nums, i, 0);
        }

        return nums;
    }

    /**
     * @param {number[]} nums
     * @param {number} n - Size of the heap
     * @param {number} i - Index of the root of the subtree
     */
    heapify(nums, n, i) {
        let largest = i; 
        let left = 2 * i + 1; 
        let right = 2 * i + 2; 

        // If left child is larger than root
        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        // If right child is larger than the largest so far
        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        // If largest is not root, swap and continue heapifying the affected sub-tree
        if (largest !== i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];

            // Recursively heapify the affected sub-tree
            this.heapify(nums, n, largest);
        }
    }
}
