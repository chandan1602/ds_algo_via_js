class ArrayClass {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    } 

    pop() {
        let item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    } 

    insertAt(item, index) {
        for (let i = this.length-1; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    } 


    deleteAt(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    } 

    getElementAtIndex(index) {
        return this.data[index];
    } 
} 

let arr = new ArrayClass()
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)
arr.pop()
console.log(arr)
arr.push(10)
arr.push(9)
arr.insertAt(20, 1)
console.log(arr)
arr.deleteAt(2)
console.log(arr)
