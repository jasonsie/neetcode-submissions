class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = {};

        const countStair = (sum) => {
            if (sum > n) return 0;
            if (sum === n) return 1;
            if (memo[sum] !== undefined) return memo[sum];

            memo[sum] = countStair(sum + 1) + countStair(sum + 2);
            return memo[sum];
        }

        return countStair(0);
    }
}
