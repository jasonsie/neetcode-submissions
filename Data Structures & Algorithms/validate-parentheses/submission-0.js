class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /*
            Q: is string the valid parentheses
            T: Stack
               if(s is left)
                    stack.push(s)
               else
                    _left = stack.pop()
                    _left === s
        */

        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (["(", "{", "["].includes(char)) {
                stack.push(char);
            } else {
                const _left = stack.pop();
                const hashMap = {
                    ")":"(",
                    "}":"{",
                    "]":"[",
                };
                if (_left !== hashMap[char]) {
                    return false
                }
            }
        }
        return stack.length === 0;
    }
}
