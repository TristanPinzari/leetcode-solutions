function maxProfit(prices: number[]): number {
    let profit = 0;
    const trades: [number, number][] = [];
    let i = 0;
    const n = prices.length;

    while (i < n - 1) {
        // find a local minimum (buy point)
        while (i < n - 1 && prices[i] >= prices[i + 1]) i++;
        const buy = i;

        // find the local maximum (sell point)
        while (i < n - 1 && prices[i] <= prices[i + 1]) i++;
        const sell = i;

        if (buy !== sell) {
            profit += prices[sell] - prices[buy];
            trades.push([buy, sell]);
        }
    }

    return profit;
};