class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = Array(nums.length).fill(1);

        const addLeftToRight = idx => {
            let l = 0;
            let r = nums.length - 1;
            let sum = 1;

            while (idx > l) {
                sum *= nums[l];
                l += 1;
            }
            while (idx < r) {
                sum *= nums[r];
                r -= 1;
            }

            return sum;
        };

        for (let i in output) {
            const sum = addLeftToRight(i);
            output[i] = sum;
        }

        return output;
    }
}
