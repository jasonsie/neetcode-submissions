class Solution {
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimiter '#'
            const delimiterIndex = str.indexOf('#', i);
            // Get the length of the next string
            const length = parseInt(str.slice(i, delimiterIndex));
            // Get the actual string using the length
            const value = str.slice(delimiterIndex + 1, delimiterIndex + 1 + length);

            result.push(value);
            // Move pointer to start of next length indicator
            i = delimiterIndex + 1 + length;
        }

        return result;
    }
}
