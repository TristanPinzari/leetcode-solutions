function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);
    let h_index = 0;
    for (let i = citations.length - 1; i >= 0; i--) {
        if (citations[i] > h_index)
            h_index++;
        else
            break;
    }
    return h_index;
};