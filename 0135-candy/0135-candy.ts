function candy(ratings: number[]): number {
    let total = ratings.length;
    let lastExtra = 0
    const temp = new Array(ratings.length);
    const temp2 = new Array(ratings.length);
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            lastExtra++;
        } else {
            lastExtra = 0;
        }
        temp[i] = lastExtra;
    }
    lastExtra = 0;
    for (let i = ratings.length - 1; i >= 0; i--) {
        if (ratings[i + 1] < ratings[i]) {
            lastExtra++;
        } else {
            lastExtra = 0;
        }
        temp2[i] = lastExtra;
    }
    for (let i = 0; i < ratings.length; i++) {
        total += Math.max(temp2[i] ?? 0, temp[i] ?? 0);
    }
    return total;
};