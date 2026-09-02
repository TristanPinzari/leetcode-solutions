/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
     const dp = new Array(books.length + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i <= books.length; i++) {
        let width = 0, maxH = 0;
        for (let j = i; j >= 1; j--) {
            width += books[j - 1][0];
            if (width > shelfWidth) break;
            maxH = Math.max(maxH, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + maxH)
        }
    }

    return dp[books.length];
};