/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const mSet = new Set<number>(), nSet = new Set<number>(), m = matrix.length, n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                mSet.add(i);
                nSet.add(j);
                continue;
            };
        }
    }

    for (const mCurr of mSet) {
         for (let i = 0; i < n; i++) {
            matrix[mCurr][i] = 0;
        }
    }

    for (const nCurr of nSet) {
         for (let i = 0; i < m; i++) {
            matrix[i][nCurr] = 0;
        }
    }
};