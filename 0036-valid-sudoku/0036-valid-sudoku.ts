function isValidSudoku(board: string[][]): boolean {
    const setH = new Set(), setV = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== "." && setH.has(board[i][j])) return false;
            if (board[j][i] !== "." && setV.has(board[j][i])) return false;
            setH.add(board[i][j]);
            setV.add(board[j][i]);
        }
        setH.clear();
        setV.clear();
    }

    for (let i = 0; i < 9; i+=3) {
        for (let j = 0; j < 9; j+=3) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    if (board[i + k][j + l] !== "." && setH.has(board[i + k][j + l])) return false;
                    setH.add(board[i + k][j + l]);
                }
            }
            setH.clear();
        }
    }

    return true;
};