function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = amount.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const parent = new Int32Array(n).fill(-1);
    const queue = new Int32Array(n);
    const visited = new Uint8Array(n);
    let head = 0;
    let tail = 0;

    queue[tail++] = 0;
    visited[0] = 1;

    while (head < tail) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (!visited[v]) {
                visited[v] = 1;
                parent[v] = u;
                queue[tail++] = v;
            }
        }
    }

    const bobTimes = new Int32Array(n).fill(-1);
    let curr = bob;
    let time = 0;
    while (curr !== -1) {
        bobTimes[curr] = time;
        curr = parent[curr];
        time++;
    }

    let maxIncome = -Infinity;
    const stackU = new Int32Array(n);
    const stackP = new Int32Array(n);
    const stackTime = new Int32Array(n);
    const stackIncome = new Float64Array(n);
    let stackPtr = 0;

    stackU[stackPtr] = 0;
    stackP[stackPtr] = -1;
    stackTime[stackPtr] = 0;
    stackIncome[stackPtr] = 0;
    stackPtr++;

    while (stackPtr > 0) {
        stackPtr--;
        const u = stackU[stackPtr];
        const p = stackP[stackPtr];
        const time_A = stackTime[stackPtr];
        const income_before = stackIncome[stackPtr];

        let currentIncome = income_before;
        const bTime = bobTimes[u];

        if (bTime !== -1) {
            if (time_A < bTime) {
                currentIncome += amount[u];
            } else if (time_A === bTime) {
                currentIncome += amount[u] / 2;
            }
        } else {
            currentIncome += amount[u];
        }

        let isLeaf = true;
        for (const v of adj[u]) {
            if (v !== p) {
                isLeaf = false;
                stackU[stackPtr] = v;
                stackP[stackPtr] = u;
                stackTime[stackPtr] = time_A + 1;
                stackIncome[stackPtr] = currentIncome;
                stackPtr++;
            }
        }

        if (isLeaf && u !== 0) {
            if (currentIncome > maxIncome) {
                maxIncome = currentIncome;
            }
        }
    }

    return maxIncome;
}