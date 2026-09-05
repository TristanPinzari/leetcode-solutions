class MinStack {
    arr: Array<number>;
    trk: Array<number>;

    constructor() {
        this.arr = new Array();
        this.trk = new Array();
    }

    push(value: number): void {
        this.arr.push(value);
        if (this.trk.length === 0) {
            this.trk.push(this.arr.length - 1);
            return;
        }
        this.trk.push(value < this.arr[this.trk[this.trk.length - 1]] ? this.arr.length - 1 : this.trk[this.trk.length - 1]);
    }

    pop(): void {
        this.arr.pop();
        this.trk.pop();
    }

    top(): number {
       return this.arr[this.arr.length - 1]; 
    }

    getMin(): number {
        return this.arr[this.trk[this.trk.length - 1]];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */