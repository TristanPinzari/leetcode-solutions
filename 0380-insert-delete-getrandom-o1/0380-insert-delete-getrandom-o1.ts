class RandomizedSet {
    set;
    constructor() {
        this.set = new Set();
    }

    insert(val: number): boolean {
        const output = !this.set.has(val);
        this.set.add(val);
        return output;
    }

    remove(val: number): boolean {
        const output = this.set.has(val);
        this.set.delete(val);
        return output;
    }

    getRandom(): number {
        return [...this.set][Math.floor(Math.random() * this.set.size)];
    }
}

/**
 * Your Randomizedthis.set object will be instantiated and called as such:
 * var obj = new Randomizedthis.set()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */