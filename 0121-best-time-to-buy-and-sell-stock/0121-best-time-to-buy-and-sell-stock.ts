function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    let highestMarkup = 0, lowIndex = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[lowIndex] > highestMarkup) {
            highestMarkup = prices[i] - prices[lowIndex];
        }
        if (prices[i] < prices[lowIndex]) lowIndex = i;
    }
    return highestMarkup;
}