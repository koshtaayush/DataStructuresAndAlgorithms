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

    // Initialize three pointers prev as NULL, curr as head and next as NULL.
    // Iterate trough the linked list. In loop, do following.
    // Before changing next of current,
    // store next node
    // next = curr->next

    // Now change next of current
    // This is where actual reversing happens
    // curr->next = prev

    // Move prev and curr one step forward
    // prev = curr
    // curr = next

    //Make the head pointer as prev

    reverseList(){
        var prev = null;
        var curr = this.head;
        var next = null;


        while(curr != null){
            next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(40);
l1.add(50);

l1.printList();
console.log("");
l1.reverseList();
l1.printList();
