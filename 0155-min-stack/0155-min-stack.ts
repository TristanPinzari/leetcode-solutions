class MinStack {
    arr: Array<Array<number>>;

    constructor() {
        this.arr = new Array();
    }

    push(value: number): void {
        this.arr.push([value, Math.min(this.getMin() ?? Infinity, value)]);
    }

    pop(): void {
        this.arr.pop();
    }

    top(): number {
       return this.arr.length ? this.arr[this.arr.length - 1][0] : null; 
    }

    getMin(): number {
        return this.arr.length ? this.arr[this.arr.length - 1][1] : null;
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