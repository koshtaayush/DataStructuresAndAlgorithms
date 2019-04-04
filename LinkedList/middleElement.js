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

    getMiddleElement(){
        console.log(this.size);
        if(this.size % 2 == 0){
            var middleIndex = Math.round(this.size/2) - 1;
        }else{
            var middleIndex = (Math.round(this.size/2));
        }

        console.log("mid "+ middleIndex);
        var curr = this.head;
        var iterator = 1;
        while(iterator < middleIndex){
            curr = curr.next;
            iterator++;
        }

        console.log("Middle element " +curr.element);
    }

    getMiddleElementTwoPointer(){
        var fastPtr = this.head;
        var slowPtr = this.head;

        if(this.head != null){
            while(fastPtr != null && fastPtr.next != null){
                fastPtr = fastPtr.next.next;
                slowPtr = slowPtr.next;
            }
        }else{
            return false;
        }

        console.log(slowPtr.element);
    }
   
}


var l1 = new LinkedList();

l1.add(10);
l1.add(20);
l1.add(50);
l1.add(60);

l1.printList();
l1.getMiddleElementTwoPointer();
