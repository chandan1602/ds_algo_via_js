//Linked Lists
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head
        this.tail = tail
    }

    append(value) {
        const newNode = {value, next : null};
        if(this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode;
        if(!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value, next: this.head };

        this.head = newNode;
        if(!this.tail) {
            this.tail =  newNode;
        }
    }

    toArray() {
        const elements = [];
        let curNode = this.head;
        while(curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }

    delete(value) {
        if(!this.head) {
            return;
        }

        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;
        while(curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next;
            }
        }

        if(this.tail.value === value) {
            this.tail = curNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if(existingNode) {
            const newNode = {value : value, next: existingNode.next}
            existingNode.next = newNode;

        }
    }

    find(value) {
        if(!this.head) {
            return;
        }

        let curNode = this.head;

        while(curNode) {
            if(curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }
}


let list = new LinkedList();
list.append(1);
list.append('hello there');
list.append('chandan');
list.append(true);
list.append(18.51);
list.prepend('First Value');
console.log(list.toArray());
list.delete('chandan');
console.log(list);
console.log('FIND : ', list.find('chandan'));
console.log('FIND : ', list.find(1));
list.insertAfter('newVal', 1);
console.log(list)