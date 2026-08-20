class NumMatrix {
    matrix: number[][];

    constructor(matrix: number[][]) {
        this.matrix = matrix;
        for (let row = 0; row < matrix.length; row++){
            for (let col = 0; col < matrix[0].length; col++) {
                const top = matrix[row - 1] ? matrix[row - 1][col] ?? 0 : 0;
                const left = matrix[row][col - 1] ?? 0;
                const topLeft = matrix[row - 1] ? matrix[row - 1][col - 1] ?? 0 : 0;
                matrix[row][col] = matrix[row][col] + top + left - topLeft;
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const top = this.matrix[row1 - 1] ? this.matrix[row1 - 1][col2] ?? 0 : 0;
        const left = this.matrix[row2][col1 - 1] ?? 0;
        const add = this.matrix[row1 - 1] ? this.matrix[row1 - 1][col1 - 1] ?? 0 : 0;
        return this.matrix[row2][col2] + add - top - left;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */