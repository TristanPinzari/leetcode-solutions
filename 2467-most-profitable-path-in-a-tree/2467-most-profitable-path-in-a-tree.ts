function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const map = new Map();
    for (const [a, b] of edges) {
        if (!map.has(a)) map.set(a, []);
        if (!map.has(b)) map.set(b, []);
        map.get(a)!.push(b);
        map.get(b)!.push(a);
    }

    let bobPath = new Array();
    function findBobPath(node: number, parent: number): boolean {
        if (node === bob) {
            bobPath.push(bob);
            return true;
        }
        for (const next of map.get(node) ?? []) {
            if (next !== parent && findBobPath(next, node)) {
                bobPath.push(node);
                return true;
            }
        }
        return false;
    }
    findBobPath(0, -1);

    const bobTime = new Map<number, number>();
    bobPath.forEach((node, i) => bobTime.set(node, i));

    let highest = -Infinity;
    function findAlicePath(step: number, node: number, parent: number, net: number) {
        const bTime = bobTime.get(node);
        if (bTime === undefined || step < bTime) {
            net += amount[node];
        } else if (step === bTime) {
            net += amount[node] / 2;
        }

        const neighbors = (map.get(node) ?? []).filter((n: number) => n !== parent);

        if (neighbors.length === 0) {
            highest = Math.max(highest, net);
        } else {
            for (const connection of neighbors) {
                findAlicePath(step + 1, connection, node, net);
            }
        }
    }
    findAlicePath(0, 0, -1, 0);
    
    return highest;
};