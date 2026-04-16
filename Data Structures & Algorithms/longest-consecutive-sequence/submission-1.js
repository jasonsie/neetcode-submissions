class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /*
            0. sorting the array
            1. using Map()
            2. it should looks like this {next:accumulated length}
            3. Object.values(map) to find out the longest one
        */
        nums.sort((a, b) => a - b);
        const map = new Map();
        for (let n of nums) {
            const isNextExpected = map.has(n);
            if (isNextExpected) {
                let val = map.get(n);
                map.set(n + 1, val + 1);
            } else {
                map.set(n + 1, 1);
            }
        }
        let maxLen = 0;
        for (const len of map.values()) {
            maxLen = Math.max(maxLen, len);
        }

        return maxLen;
    }
}
