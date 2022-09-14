import {
    makeAutoObservable,
    makeObservable
} from 'mobx';

class Counter {
    count = 0;
    timer = 60;
    totalz = this.count + this.timer;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count += 1;
        this.totalz = this.count + this.timer;
    }

    decrement() {
        this.count -= 1;
        this.totalz = this.count + this.timer;
    }

    multiple() {
        this.totalz *= 2;
    }

    division() {
        this.totalz /= 2;
    }

    zero() {
        this.totalz = 0;
    }

    get total() {
        return 'Count + timer = ' + this.totalz;
    }
}

export default new Counter();