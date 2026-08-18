function numIslands(grid: string[][]): number {
    const m = grid[0].length, n = grid.length;
    let island = 0;

    function destroyIsland(i, j) {
        if (grid[i] && grid[i][j] && grid[i][j] === "1") {
            grid[i][j] = "0";
            destroyIsland(i, j + 1);
            destroyIsland(i, j - 1);
            destroyIsland(i + 1, j);
            destroyIsland(i - 1, j);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1") {
                destroyIsland(i, j);
                island++;
            }
        }
    }

    return island;
};