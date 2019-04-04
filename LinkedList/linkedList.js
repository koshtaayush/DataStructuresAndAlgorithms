class Node{
    constructor(element){
        this.element = element ;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    //adding an element in the linked list
    add(element){
        var newNode = new Node(element);

        var current;

        if(this.head == null){
            this.head = newNode;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;

    }

    //printing the linked list
    printList(){
        
        var curr = this.head;
        var str = "";

        //To iterate over the list use curr != null
        while(curr != null){
            str += " " +curr.element;
            curr = curr.next;
        }
        console.log(str);
    }

    // In the order to add an element at the end of the list we consider the following :

    // If the list is empty then add an element and it will be head
    // If the list is not empty then iterate to the end of the list and add an element at the end of the list

    insertAt(element, index){
        if(index > 0 && index > this.size){
            console.log("index greater than size");
            return false;
        }

        var newNode = new Node(element);
        var curr, prev;
        
        curr = this.head;

        if(index == 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            var iterator = 0;
            while(iterator < index){
                iterator++;
                prev = curr;
                curr = curr.next;
            }

            newNode.next = curr;
            prev.next = newNode;
        }
        this.size++;
    }

    removeFrom(index){
        if(index > 0 && index > this.size){
            console.log("index greater than size");
            return false;
        }

        if(index == 0){
            var prevHead = this.head;
            var newHead = this.head.next;
            this.head = newHead;
            this.size--;
            //return removed element
            return prevHead.element;
        }

        var curr, prev;
        var iterator = 0;
        curr = this.head;
        while(iterator < index){
            iterator++;
            prev = curr;
            curr = curr.next;
        }

        prev.next = curr.next;
        this.size--;
        return curr.element;

    }
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(40);
l1.add(50);

l1.printList();
console.log("");
l1.removeFrom(2);
l1.printList();
