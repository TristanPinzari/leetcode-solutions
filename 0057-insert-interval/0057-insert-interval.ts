function insert(intervals: number[][], newInterval: number[]): number[][] {
    const answer = new Array();
    let dragging = false;
    if (intervals.length === 0) return [newInterval];
    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i], next = intervals[i + 1];
        const leftWithin = current[0] <= newInterval[0] && newInterval[0] <= current[1];
        const rightWithin = current[0] <= newInterval[1] && newInterval[1] <= current[1];
        if (!intervals[i - 1] && newInterval[1] < current[0]) {
            answer.push(newInterval);
            answer.push(current);
            continue;
        }
        if (current[1] < newInterval[0] && (!next || newInterval[1] < next[0])) {
            answer.push(current);
            answer.push(newInterval);
            continue;
        }
        if (current[1] < newInterval[0] || newInterval[1] < current[0] || (leftWithin && rightWithin)) {
            answer.push(current);
            continue;
        }
        if (!leftWithin && !rightWithin && !dragging && (!next || newInterval[1] < next[0])) {
            answer.push(newInterval);
            continue;
        }
        if (answer[answer.length - 1] && current[1] <= answer[answer.length - 1][1]) continue;
        if (leftWithin) {
            answer.push([current[0], Math.max(current[1], newInterval[1])]);
            dragging = true;
        }
        if (rightWithin) {
            if (dragging) {
                answer[answer.length - 1][1] = current[1];
            } else {
                answer.push([newInterval[0], current[1]]);
            }
        }
    }
    return answer;
};