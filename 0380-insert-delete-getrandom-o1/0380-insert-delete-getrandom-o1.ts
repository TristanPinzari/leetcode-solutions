class RandomizedSet {
    
    private _container = [];
    private _hashTable: Array<number> = []; //stores the index into _container
    
    constructor() {}

    insert(val: number): boolean {
        if(this._hashTable[val] !== undefined) {
            return false;
        }
        this._container.push(val);
        this._hashTable[val] = this._container.length - 1;
        return true;
    }

    remove(val: number): boolean {
        // console.log(`Container Before removing ${val}: ${this._container}`)
        const index = this._hashTable[val];
        if(index === undefined) {
            return false;
        }

        else if(this._container.length > 1 && index !== this._container.length - 1) {
            const lastVal = this._container.pop();
            this._hashTable[val] = undefined;
            this._container[index] = lastVal;
            this._hashTable[lastVal] = index;
        }
        else {
            const lastVal = this._container.pop();
            this._hashTable[val] = undefined;
        }
        
        // console.log(`Container After removing ${val}: ${this._container}`);
        return true;
    }

    getRandom(): number {
        return this._container[Math.floor(Math.random() * this._container.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */