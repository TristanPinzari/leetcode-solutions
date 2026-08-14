/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < i + n - i * 2 - 1; j++) {
            let sorted = 0, last = [i, j, matrix[i][j]];
            while (sorted !== 4) {
                const i = last[1], j = n - last[0] - 1, temp = matrix[i][j];
                matrix[i][j] = last[2];
                last = [i, j, temp];
                sorted++;
            }
        }
    }
};