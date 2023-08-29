// DoublyLinkedList.js
const Node = require('./node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // The push method takes a value as a parameter and assigns it as the tail of the list
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // First approach
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.tail.next = null


            // Second approach
            // let curr = this.head;
            // while (curr.next != null) {
            //     curr = curr.next;
            // }
            // curr.next = newNode
            // newNode.prev = curr;
            // newNode.next = null;
            // this.tail = newNode;

        }
        this.length++;
    }

    // First approach from head
    // The pop method removes the tail of the list
    // pop() {
    //     if (!this.head) {
    //         throw new Error('List is empty');

    //     } else if (!this.head.next) {
    //         // Special case: Only one node in the list
    //         this.head = null;
    //         this.tail = null;
    //     } else {
    //         let curr = this.head;
    //         while (curr.next.next !== null) {
    //             curr = curr.next;
    //         }
    //         // Disconnect the last node from the list
    //         curr.next.prev = null;
    //         curr.next = null;
    //     }
    // }

    // Second approach from tail
    // The pop method removes the tail of the list
    pop() {
        if (!this.head) {
            throw new Error('List is empty');
        } else if (!this.head.next) {
            // Special case: Only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    }

    // The shift method removes the head of the list
    shift() {
        if (!this.head) {
            throw new Error('List is empty');
        } else if (!this.head.next) {
            // Special case: Only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
    }

    // The unshift method takes a value as a parameter and assigns it as the head of the list
    unShift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // this.head.prev = null;
        }
        this.length++;
    }

    // The get method takes an index number as a parameter and returns the value of the node at that index
    get(index) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('Index out of Range');
        } else if (index === 0) {
            return this.head.value;
        } else if (index === this.length - 1) {
            return this.tail.value;
        } else if (index < this.length / 2) {
            let curr = this.head;
            for (let i = 0; i <= index - 1; i++) {
                curr = curr.next;
            }
            return curr.value;
        } else {
            let curr = this.tail;
            for (let i = this.length - 1; i >= index + 1; i--) {
                curr = curr.prev;
            }
            return curr.value;
        }
    }


    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, value) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('Index out of Range');
        } else if (index === 0) {
            this.head.value = value;
        } else if (index === this.length - 1) {
            this.tail.value = value;
        } else if (index < this.length / 2) {
            let curr = this.head;
            for (let i = 0; i <= index - 1; i++) {
                curr = curr.next;
            }
            curr.value = value;
        } else {
            let curr = this.tail;
            for (let i = this.length - 1; i >= index + 1; i--) {
                curr = curr.prev;
            }
            curr.value = value;
        }
    }

    // The insert method takes an index number and a value as parameters, 
    // and inserts the value at the given index in the list. It returns true on successful insert or false
    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of Range');
        } else if (index === 0) {
            this.unShift(value);
        } else if (index === this.length) {
            this.push(value);
        } else if (index < this.length / 2) {
            const newNode = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            newNode.prev = curr;
            curr.next.prev = newNode;
            curr.next = newNode;
        } else {
            const newNode = new Node(value);
            let curr = this.tail;
            for (let i = this.length - 1; i >= index + 1; i--) {
                curr = curr.prev;
            }
            newNode.next = curr;
            newNode.prev = curr.prev;
            curr.prev.next = newNode;
            curr.prev = newNode;
        }
        this.length++;
    }

    // The remove method takes an index number as a parameter and removes the node at the given index in the list
    remove(index) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('Index out of Range');
        } else if (index === 0) {
            this.shift();
        } else if (index === this.length - 1) {
            this.pop();
        } else if (index < this.length / 2) {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next.next.prev = curr;
            curr.next = curr.next.next;
        } else {
            let curr = this.tail;
            for (let i = this.length - 1; i > index + 1; i--) {
                curr = curr.prev;
            }
            curr.prev.prev.next = curr;
            curr.prev = curr.prev.prev;
        }
        this.length--;
    }

    // Print the list
    print() {
        if (!this.head) {
            throw new Error('List is empty');
        } else {
            let curr = this.head;
            while (curr !== null) {
                console.log(curr.value + " ");
                curr = curr.next;
            }
        }
    }

}

module.exports = DoublyLinkedList;