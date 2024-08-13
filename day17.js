class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new Node(5)

let secondNode = new Node(10)

head.next = secondNode;

let ThirdNode = new Node(15)

secondNode.next = ThirdNode;

let current = head;
while(current !== null){
    console.log(current.value);
    current = current.next
}       // task 1