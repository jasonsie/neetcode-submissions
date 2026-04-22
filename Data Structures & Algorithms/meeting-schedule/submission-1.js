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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        let _endT = -1;
        for (const { start, end } of intervals) {
            if (_endT > start) return false;
            _endT = Math.max(_endT, end);
        }

        return true;
    }
}
