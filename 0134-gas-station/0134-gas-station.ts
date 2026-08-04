function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalNeeded = 0, totalAvailable = 0;
    for (let i = 0; i < gas.length; i++) {
        totalNeeded += cost[i];
        totalAvailable += gas[i];
    }
    if (totalNeeded > totalAvailable) return -1;
    let answer= 0, net = 0;
    for (let i = 0; i < gas.length; i++) {
        net += gas[i] - cost[i];
        if (net < 0) {
            net = 0;
            answer = i + 1;
        }
    }
    return answer;
};