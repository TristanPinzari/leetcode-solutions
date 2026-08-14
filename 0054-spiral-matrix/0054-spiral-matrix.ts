function spiralOrder(matrix: number[][]): number[] {
    const res = new Array(), m = matrix.length, n = matrix[0].length;
    let left = 0, right = 0, up = 0, down = 0, rightAndDown = true;
    while (up + down !== m && right + left !== n) {
        if (rightAndDown) {
            for (let i = left; i < n - right - 1; i++) {
                res.push(matrix[up][i]);
            }
            for (let i = up; i < m - down; i++) {
                res.push(matrix[i][n - right - 1]);
            }
            right++;
            up++;
        } else {
            for (let i = n - right - 1; i > left; i--) {
                res.push(matrix[m - down - 1][i]);
            }
            for (let i = m - down - 1; i >= up; i--) {
                res.push(matrix[i][left]);
            }
            down++;
            left++;
        }
        rightAndDown = !rightAndDown;
    }
    return res;
};