/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        /*
            start : [0,  5, 15]
            end:    [10,20, 30]
            
                     str<end ? s++; count++
            0, 10 -> 0<10 ? s++; count++
            5, 10 -> 5<10 ? s++; count++
            15,10 -> 15<10? e++; count--
            15,20 -> 15<20? s++; count++
            ----
         */

        const starts = intervals.map(({ start }) => start).sort((a, b) => a - b);
        const ends = intervals.map(({ end }) => end).sort((a, b) => a - b);
        let res = 0;
        let str = 0;
        let end = 0;
        let count = 0;

        while (str < intervals.length) {
            if (starts[str] < ends[end]) {
                str++;
                count++;
                res = Math.max(res, count);
            } else {
                end++;
                count--;
            }
        }

        return res;
    }
}
