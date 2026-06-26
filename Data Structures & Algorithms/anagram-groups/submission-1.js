class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            // Sort the string to create a unique key for anagrams
            const sortedStr = str.split('').sort().join('');

            // If the key doesn't exist in the map, initialize it with an empty array
            if (!map[sortedStr]) {
                map[sortedStr] = [];
            }

            // Push the original string into the corresponding anagram group
            map[sortedStr].push(str);
        }

        // Return all the grouped sublists
        return Object.values(map);
    }
}
