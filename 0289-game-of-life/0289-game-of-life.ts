function gameOfLife(board: number[][]): void {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            let live = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    const r = row + dr, c = col + dc;
                    if (board[r] && (board[r][c] === 1 || board[r][c] === 2)) live++;
                }
            }
            const wasLive = board[row][col] === 1;
            if (wasLive && (live < 2 || live > 3)) {
                board[row][col] = 2; // live -> dead
            } else if (!wasLive && live === 3) {
                board[row][col] = 3; // dead -> live
            }
            // else: no reassignment needed — value already correctly represents "no change"
        }
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] <= 1) continue;
            board[row][col] -= 2;
        }
    }
};