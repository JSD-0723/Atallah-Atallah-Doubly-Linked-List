// Main.js
const DoublyLinkedList = require('./doublyLinkedList');

const list = new DoublyLinkedList();

// push(value)
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log("Push Test:");
list.print();

// pop()
list.pop();
console.log("\nPop Test:");
list.print();

// shift()
list.shift();
console.log("\nShift Test:");
list.print();

// unShift(value)
list.unShift(1);
console.log("\nUnShift Test:");
list.print();

// get(index)
console.log("\nGet Test:");
console.log(list.get(0));
console.log(list.get(2));

// set(index, value)
list.set(2, 5);
console.log("\nSet Test:");
list.print();

// insert(index, value)
list.insert(2, 3);
console.log("\nInsert Test:");
list.print();

// remove(index)
list.remove(3);
console.log("\nRemove Test:");
list.print();