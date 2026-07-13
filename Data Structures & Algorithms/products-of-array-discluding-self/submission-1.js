class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n);

        // Step 1: Calculate the prefix products.
        // output[i] will store the product of all elements to the left of index i.
        output[0] = 1;
        for (let i = 1; i < n; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }

        // Step 2: Calculate the suffix products on the fly and multiply them.
        // 'rightProduct' tracks the product of all elements to the right of index i.
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] = output[i] * rightProduct;
            rightProduct *= nums[i]; // Update the suffix product for the next element to the left
        }

        return output;
    }
}