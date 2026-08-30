function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const answer = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const lastInterval = answer[answer.length - 1];
        if (lastInterval[1] >= interval[0]) {
            lastInterval[1] = Math.max(interval[1], lastInterval[1]);
        } else {
            answer.push(interval);
        }
    }

    return answer;
}