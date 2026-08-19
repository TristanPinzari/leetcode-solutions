/**
 Do not return anything, modify board in-place instead.
 */

function gameOfLife(board: number[][]): void {
    const copy = board.map(row => [...row]);
    
    function liveNeighbors(row, col) {
        let live = 0;
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue; // skip the cell itself
                const r = row + dr, c = col + dc;
                if (copy[r] && copy[r][c] && copy[r][c] === 1) live++;
            }
        }
        return live;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const live = liveNeighbors(row, col);
            if (live < 2 || live > 3) {
                board[row][col] = 0;
            } else if (live === 3) {
                board[row][col] = 1;
            }
        }
    }
};