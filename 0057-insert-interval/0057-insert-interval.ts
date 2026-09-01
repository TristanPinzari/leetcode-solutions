function insert(intervals: number[][], newInterval: number[]): number[][] {
    const answer: number[][] = [];
    let i = 0;

    // 1. Add all intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        answer.push(intervals[i]);
        i++;
    }

    // 2. Merge all intervals that overlap with newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [
            Math.min(newInterval[0], intervals[i][0]),
            Math.max(newInterval[1], intervals[i][1])
        ];
        i++;
    }
    answer.push(newInterval);

    // 3. Add remaining intervals
    while (i < intervals.length) {
        answer.push(intervals[i]);
        i++;
    }

    return answer;
}