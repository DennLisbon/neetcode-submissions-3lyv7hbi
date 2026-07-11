class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs) {
            // Format: <length>#<string>
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimiter '#' starting from index i
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            // Extract the length of the next string
            const length = parseInt(str.substring(i, j), 10);
            
            // Move our pointer past the '#'
            i = j + 1;
            
            // Extract the substring based on the parsed length
            const actualStr = str.substring(i, i + length);
            result.push(actualStr);
            
            // Move pointer to the start of the next encoded block
            i += length;
        }

        return result;
    }
}
