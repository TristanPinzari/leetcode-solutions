/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length, copy = matrix.map(row => [...row]);;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = copy[n - j - 1][i];
        }
    }
};