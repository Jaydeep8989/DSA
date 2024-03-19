/* Push oprrtion of list  */

// singlyLinkedList.push(5); // singlyLinkedList
// singlyLinkedList.length; // 1
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 5
 
// singlyLinkedList.push(10); // singlyLinkedList
// singlyLinkedList.length; // 2
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.tail.val; // 10
 
// singlyLinkedList.push(15); // singlyLinkedList
// singlyLinkedList.length; // 3
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.tail.val;

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{ 
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push code
    push(val){
        var newNode = new Node(val);
        // if node in not present in list means first node in list 
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        // if node in already present on the list
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5);
