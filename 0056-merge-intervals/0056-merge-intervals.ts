function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);

    const answer = [intervals[0]];
    let last = 0;

    for (const interval of intervals) {
        const lastInterval = answer[last];
        if (lastInterval[1] >= interval[0]) {
            answer[last][1] = Math.max(interval[1], lastInterval[1]);
        } else {
            answer.push(interval);
            last++;
        }
    }

    return answer;
};