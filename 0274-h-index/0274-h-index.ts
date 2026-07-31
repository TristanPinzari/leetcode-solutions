function hIndex(citations: number[]): number {
    let output1, output2;
    for (const num of citations.sort((a, b) => b - a)) {
        if (citations.filter(n => n >= num).length >= num) {
            output1 = num;
            break;
        };
    }
    for (let i = citations.length; i > 0; i--) {
        if (citations.filter(n => n >= i).length >= i) {
            output2 = i;
            break;
        }
    }
    return Math.max(output1 || 0, output2 || 0);
};