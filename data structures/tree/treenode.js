class Node {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}

const root = new Node('root');

const first = new Node('first');
const second = new Node('second');
const third = new Node('third');
const sixth = new Node('sixth');
const fourth = new Node('fourth');
const fifth = new Node('fifth');

root.descendents.push(first, second);

first.descendents.push(third, fourth);

second.descendents.push(fifth, sixth);

console.log(root)

console.log(first)

console.log(second)
