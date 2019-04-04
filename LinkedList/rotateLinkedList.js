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

    
    // Here we need to do 3 things for 
    // 10->20->30->40->50->60 and k = 4
    // 50->60->10->20->30->40

    // 1. get hold of kth node and mark its next as null
    // 2. make the (k+1)th node as the new head;
    // 3. make the last node's next as the current head
    rotateList(k){

        var curr = this.head;
        var iterator = 1;
        while(iterator < k && curr != null){
            curr = curr.next;
            iterator++;
        }

        if(curr == null){
            console.log("k is more than the list size");
            return false;
        }

        var kNode = curr;
        var kPluOneNode = curr.next;

        // curr.next != null because we have to stop at the last node
        // after this curr will point to last node
        while(curr.next != null){
            curr = curr.next;
        }

        kNode.next = null;
        curr.next = this.head;
        this.head = kPluOneNode;

        // return this.head;
    }
    
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
l1.add(50);
l1.add(60);

l1.printList();
console.log("");
l1.rotateList(4);
l1.printList();
