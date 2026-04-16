class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()
        for (let n = 0; n < nums.length; n++) {
            const current = nums[n]
            const isExist = freqMap.has(current)
            const mapVal = freqMap.get(current)
            freqMap.set(current, isExist ? mapVal + 1 : 1)
        }
        // Sort by frequency and return top k elements
        return Array.from(freqMap.entries())
            .sort((a, b) => b[1] - a[1])  // Sort by frequency in descending order
            .slice(0, k)                   // Take top k elements
            .map(entry => entry[0]);       // Extract just the numbers
    }
}
