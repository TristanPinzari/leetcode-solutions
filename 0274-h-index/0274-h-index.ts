function hIndex(citations: number[]): number {
    let output1 = 0, output2 = 0;
    for (const num of citations.sort((a, b) => a - b)) {
        if (citations.filter(n => n >= num).length >= num) {
            if (num > output1) output1 = num;
            continue;
        };
        break;
    }
    for (let i = citations.length; i > 0; i--) {
        if (citations.filter(n => n >= i).length >= i) {
            output2 = i;
            break;
        }
    }
    return Math.max(output1, output2);
};